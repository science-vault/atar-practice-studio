#!/usr/bin/env python3
"""Compare active question content independently of IDs, source names and option order.
Candidates are review prompts: distinct diagram labels or stimuli can be intentional.
"""
import difflib,json,re,subprocess,unicodedata
from pathlib import Path
R=Path(__file__).resolve().parents[1];cfg=json.loads((R/'data/register-config.json').read_text())
js="const fs=require('fs'),vm=require('vm'),c={window:{}};vm.createContext(c);for(const f of "+json.dumps(cfg['bankFiles'])+")vm.runInContext(fs.readFileSync(f,'utf8'),c);console.log(JSON.stringify(c.window.QUESTION_BANK));"
questions=json.loads(subprocess.check_output(['node','-e',js],cwd=R))
def normalize(t):
 t=unicodedata.normalize('NFKC',t).lower();t=re.sub(r'choose the (best|correct) answer[.]?','',t);t=re.sub(r'^\s*(?:question\s*)?\d+[.\s]*(?:\(\d+\s*marks?\))?','',t);return re.sub(r'[^a-z0-9]','',t)
items=[]
for q in questions:
 mcq=len(q['parts'])==1 and q['parts'][0]['type']=='mcq';stem=q.get('originalStem',q['stem']);parts=q['parts'];options=parts[0]['options'] if mcq else [p['prompt'] for p in parts];content=normalize(stem+' '.join(sorted(options)));items.append(dict(id=q['id'],subject=q['subject'],year=q['year'],kind='mcq' if mcq else 'written',content=content,grams={content[i:i+3] for i in range(len(content)-2)}))
candidates=[];known=cfg.get('duplicateReviewDecisions',{})
for i,a in enumerate(items):
 for b in items[i+1:]:
  if (a['subject'],a['year'],a['kind'])!=(b['subject'],b['year'],b['kind']):continue
  if len(a['content'])<35 or len(b['content'])<35:continue
  if len(a['grams']&b['grams'])/max(1,len(a['grams']|b['grams']))<.4:continue
  ratio=difflib.SequenceMatcher(None,a['content'],b['content'],autojunk=False).ratio()
  if ratio<.79:continue
  pair='|'.join(sorted([a['id'],b['id']]));candidates.append(dict(questions=[a['id'],b['id']],similarity=round(ratio,4),exactText=a['content']==b['content'],decision=known.get(pair,'review_required')))
report=dict(checkedQuestions=len(items),method='Normalised original prompt and response content; ignores option order, source labels and formatting. Near-match candidates require diagram/stimulus review.',candidates=candidates,excludedRepeats=[dict(id=h['id'],duplicateOf=h['duplicateOf'],reason=h['reason']) for h in cfg['held'] if h.get('duplicateOf')])
(R/'data/duplicate-review.json').write_text(json.dumps(report,indent=2)+'\n')
unreviewed=[c for c in candidates if c['decision']=='review_required'];print(json.dumps(dict(checked=len(items),candidates=len(candidates),unreviewed=len(unreviewed),excludedRepeats=len(report['excludedRepeats']))))
if unreviewed:print(json.dumps(unreviewed,indent=2))

if unreviewed:raise SystemExit(1)
