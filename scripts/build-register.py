"""Rebuild the GitHub-backed question register: python3 scripts/build-register.py.
Only execute trusted repository question-bank JavaScript. Add new sources/batches
in data/register-config.json before importing; missing provenance fails the build.
"""
import json,subprocess,hashlib,sqlite3,csv,io,re,datetime
from pathlib import Path
from zoneinfo import ZoneInfo
R=Path(__file__).resolve().parents[1];cfg=json.loads((R/'data/register-config.json').read_text())
today=max(datetime.datetime.now(ZoneInfo('Australia/Perth')).date().isoformat(),cfg['createdDate'])
js="const fs=require('fs'),vm=require('vm');let c={window:{}};vm.createContext(c);for(const f of "+json.dumps(cfg['bankFiles'])+")vm.runInContext(fs.readFileSync(f,'utf8'),c);console.log(JSON.stringify({questions:c.window.QUESTION_BANK,curriculum:c.window.CURRICULUM,groups:c.window.TOPIC_GROUPS,subtopics:c.window.SUBTOPICS}));"
d=json.loads(subprocess.check_output(['node','-e',js],cwd=R));topics={t[0]:t[1] for s in d['curriculum'] for us in s['years'].values() for u in us for t in u[2]};records=[];seen={};old={}
registerPath=R/'data/question-register.json'
if registerPath.exists():old={q['id']:q for q in json.loads(registerPath.read_text())['questions']}
for q in d['questions']:
 if not q.get('questionTypes') or not q.get('subtopicIds') or not q.get('examSection'):raise ValueError('Missing classification metadata: '+q['id'])
 for p in q['parts']:
  if not p.get('questionTypes') or not p.get('subtopicIds'):raise ValueError('Missing part metadata: '+q['id']+' '+p['id'])
  if any(t not in d['subtopics'] for t in p['subtopicIds']):raise ValueError('Unknown subtopic: '+q['id'])
 if re.search(r'Question number\s*:\s*_{3,}',q['stem'],re.I):raise ValueError('Spare answer-page placeholder in '+q['id'])
 source=next((s for s in cfg['sources'] if q['id'].startswith(s['questionPrefix'])),None)
 if not source:raise ValueError('Missing source for '+q['id'])
 content={'stem':q['stem'],'parts':[{k:p.get(k) for k in ['id','prompt','type','options','marks']} for p in q['parts']],'tables':q.get('tables',[]),'images':q.get('images',[])}
 fingerprint=hashlib.sha256(re.sub(r'\s+',' ',json.dumps(content,sort_keys=True,ensure_ascii=False)).encode()).hexdigest()
 if q['id'] in seen:raise ValueError('Duplicate question ID '+q['id'])
 seen[q['id']]=fingerprint
 topic=d['groups'].get(q['topic'],q['topic']);n=re.search(r'-q(\d+)$',q['id']);parts=q['parts'];images=[i for i in q.get('images',[])]+[i for p in parts for k in ['images','solutionImages'] for i in p.get(k,[])]
 records.append(dict(id=q['id'],sourceId=source['id'],batchId=source['batchId'],source=source['title'],originalQuestion=int(n[1]) if n else None,subject=q['subject'],year=q['year'],unit=q['unit'],topic=topics.get(topic,topic),topicId=topic,title=q['title'],status='sample' if q.get('sample') else 'published',uploadedDate=source.get('uploadedDate'),recordedDate=old.get(q['id'],{}).get('recordedDate',today),structure=q.get('structure'),questionTypes='; '.join(q.get('questionTypes',[])),examSection=q.get('examSection'),subtopicIds='; '.join(q.get('subtopicIds',[])),subtopics='; '.join(d['subtopics'][t]['label'] for t in q.get('subtopicIds',[])),coveredTopics='; '.join(topics.get(t,t) for t in q.get('topicIds',[])),units='; '.join(str(u) for u in q.get('units',[q['unit']]) if u is not None),parts=len(parts),marks=sum(p['marks'] for p in parts),minutes=sum(p['marks'] for p in parts),images=len(images),hasMarkingKey=all(bool(p.get('solution')) for p in parts),fingerprint=fingerprint,notes=q.get('editorialNote',''),bankFile=next(f for f in cfg['bankFiles'] if f!='curriculum.js' and q['id'] in (R/f).read_text())))
for h in cfg['held']:
 if h['id'] in seen:raise ValueError('Held question also published: '+h['id'])
 s=next(s for s in cfg['sources'] if s['id']==h['sourceId']);records.append(dict(id=h['id'],sourceId=s['id'],batchId=s['batchId'],source=s['title'],originalQuestion=h['originalQuestion'],subject=s['subject'],year=s['year'],unit=None,topic='Review required',topicId=None,title=s['title']+' · Q'+str(h['originalQuestion']),status='held',uploadedDate=s['uploadedDate'],recordedDate=old.get(h['id'],{}).get('recordedDate',today),structure=None,questionTypes='',examSection=None,subtopicIds='',subtopics='',coveredTopics='',units='',parts=None,marks=None,minutes=None,images=None,hasMarkingKey=True,fingerprint=None,notes=h['reason'],bankFile=None))
# Retain previously registered rows if questions are removed from the active bank.
for id,row in old.items():
 if id not in {q['id'] for q in records}:records.append({**row,'status':'archived','notes':row.get('notes','')+' Removed from active bank; provenance retained.'})
fp={}
for q in records:
 if q['fingerprint']:fp.setdefault(q['fingerprint'],[]).append(q['id'])
dup=[v for v in fp.values() if len(v)>1]
result=dict(schemaVersion=2,updatedDate=today,sources=cfg['sources'],batches=cfg['batches'],questions=records,duplicateCandidates=dup,partMetadata=[dict(questionId=q['id'],partId=p['id'],marks=p['marks'],responseFormat=p['type'],questionTypes=p['questionTypes'],subtopicIds=p['subtopicIds'],subtopicTagBasis=p['subtopicTagBasis']) for q in d['questions'] for p in q['parts']])
registerPath.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
fields=list(records[0]);stream=io.StringIO();w=csv.DictWriter(stream,fields);w.writeheader();w.writerows(records);(R/'data/question-register.csv').write_text(stream.getvalue())
# SQLite stores sources, upload batches, question records and source filenames.
db=R/'data/question-register.sqlite';tmp=db.with_suffix('.tmp');tmp.unlink(missing_ok=True)
with sqlite3.connect(tmp) as conn:
 conn.executescript('PRAGMA foreign_keys=ON; CREATE TABLE batches(id TEXT PRIMARY KEY, label TEXT, uploaded_date TEXT); CREATE TABLE sources(id TEXT PRIMARY KEY,title TEXT,provider TEXT,exam_year INTEGER,batch_id TEXT REFERENCES batches(id)); CREATE TABLE source_files(source_id TEXT REFERENCES sources(id),role TEXT,filename TEXT,PRIMARY KEY(source_id,role,filename));')
 for b in cfg['batches']:conn.execute('INSERT INTO batches VALUES(?,?,?)',(b['id'],b['label'],b.get('uploadedDate')))
 for s in cfg['sources']:
  conn.execute('INSERT INTO sources VALUES(?,?,?,?,?)',(s['id'],s['title'],s['provider'],s.get('examYear'),s['batchId']))
  for role,files in s.get('files',{}).items():
   for f in files:conn.execute('INSERT INTO source_files VALUES(?,?,?)',(s['id'],role,f))
 columns=[f+' '+('INTEGER' if f in ['originalQuestion','year','unit','parts','marks','minutes','images','hasMarkingKey'] else 'TEXT')+(' PRIMARY KEY' if f=='id' else '') for f in fields]
 conn.execute('CREATE TABLE questions('+','.join(columns)+',FOREIGN KEY(sourceId) REFERENCES sources(id),FOREIGN KEY(batchId) REFERENCES batches(id))')
 for q in records:conn.execute('INSERT INTO questions VALUES('+','.join('?' for f in fields)+')',[q.get(f) for f in fields])
 conn.executescript('CREATE INDEX question_source ON questions(sourceId,originalQuestion);CREATE UNIQUE INDEX source_question_unique ON questions(sourceId,originalQuestion);CREATE INDEX question_fingerprint ON questions(fingerprint);CREATE INDEX question_status ON questions(status);')
 conn.executescript('CREATE TABLE subtopics(id TEXT PRIMARY KEY, label TEXT, topic_id TEXT,subject TEXT,year INTEGER,unit INTEGER); CREATE TABLE question_parts(question_id TEXT REFERENCES questions(id),part_id TEXT,marks REAL,response_format TEXT,question_types TEXT,subtopic_ids TEXT,subtopic_tag_basis TEXT,PRIMARY KEY(question_id,part_id));')
 for st in d['subtopics'].values():conn.execute('INSERT INTO subtopics VALUES(?,?,?,?,?,?)',(st['id'],st['label'],st['topicId'],st['subject'],st['year'],st['unit']))
 for p in result['partMetadata']:conn.execute('INSERT INTO question_parts VALUES(?,?,?,?,?,?,?)',(p['questionId'],p['partId'],p['marks'],p['responseFormat'],'; '.join(p['questionTypes']),'; '.join(p['subtopicIds']),p['subtopicTagBasis']))
 conn.executescript('CREATE TABLE question_subtopics(question_id TEXT REFERENCES questions(id),subtopic_id TEXT REFERENCES subtopics(id),PRIMARY KEY(question_id,subtopic_id)); CREATE TABLE part_subtopics(question_id TEXT,part_id TEXT,subtopic_id TEXT REFERENCES subtopics(id),PRIMARY KEY(question_id,part_id,subtopic_id),FOREIGN KEY(question_id,part_id) REFERENCES question_parts(question_id,part_id)); CREATE TABLE part_types(question_id TEXT,part_id TEXT,question_type TEXT,PRIMARY KEY(question_id,part_id,question_type),FOREIGN KEY(question_id,part_id) REFERENCES question_parts(question_id,part_id));')
 for q in d['questions']:
  for st in q['subtopicIds']:conn.execute('INSERT INTO question_subtopics VALUES(?,?)',(q['id'],st))
 for p in result['partMetadata']:
  for st in p['subtopicIds']:conn.execute('INSERT INTO part_subtopics VALUES(?,?,?)',(p['questionId'],p['partId'],st))
  for kind in p['questionTypes']:conn.execute('INSERT INTO part_types VALUES(?,?,?)',(p['questionId'],p['partId'],kind))
 assert conn.execute('PRAGMA integrity_check').fetchone()[0]=='ok'
tmp.replace(db)
print(json.dumps({'records':len(records),'published':sum(q['status']=='published' for q in records),'samples':sum(q['status']=='sample' for q in records),'held':sum(q['status']=='held' for q in records),'duplicateCandidates':len(dup)}))
