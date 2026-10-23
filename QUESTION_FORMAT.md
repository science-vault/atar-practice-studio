# Question publishing format

Questions supplied in chat are converted into entries in questions.js and published to GitHub. This website does not accept file uploads from visitors.

Each question has a stable unique id, subject, year (11 or 12), unit, topic id from curriculum.js, title, stem, source, images and parts. Keep existing IDs unchanged so bookmarks and progress survive additions.

Images use assets/... paths and descriptive alt text. Preserve original diagrams, labels, graphs and shared stimuli. Include part-specific images in parts[].images and solution diagrams in parts[].solutionImages. Do not guess unreadable content; ask for clarification.

Each part has id (a, b, a.i, etc.), type (mcq or written), prompt, marks, solution, and optional criteria. MCQ parts also require options and a zero-based answer index. Keep all related parts in one question and retain original order and mark allocations.

Written responses are self-assessed against a supplied or reviewed marking key. MCQs are checked from the stored key. No AI or external marking service is used by the website.

The topic labels summarise the 2026 SCSA syllabuses, linked from each subject/year topic page. Check relevant syllabus versions when processing uploads, particularly older examinations. Keep cross-topic questions together under their main topic and record additional topics in optional tags. Do not publish missing or ambiguous keys as verified answers.


### Multiple topics
Use `topicIds` to list all relevant chapter IDs. Set `topic` to the subject/year mixed ID (e.g. `h12-mixed`) when more than one chapter is substantively assessed. Questions remain visible in every listed chapter and in Mixed topics. Preserve one stable question ID; do not duplicate the record. If it spans units, set `unit: null` and provide `units: [3, 4]` (or `[1, 2]`). Unit 0 in curriculum navigation is the Across units group, not a syllabus unit. Screenshot-derived chapter groups and expandable subtopics are recorded in curriculum.js and data/topic-heading-sources.json. Rebuild the register after classification changes.


### Assessment-builder metadata (required for future imports)
Every question must have stable `subtopicIds`, `questionTypes`, `examSection` and `structure`. Each part retains its original `type` (`mcq`/`written`) for the answer input, and also has `questionTypes`, `subtopicIds`, and `subtopicTagBasis` (`part` for individually assigned placement or `shared_question` for shared question-level coverage). Select IDs from window.SUBTOPICS and kinds from window.QUESTION_TYPES. Never renumber existing subtopic IDs.

Kinds: multiple_choice, short_answer, calculation, extended_response, graphing, diagram, data_interpretation, table_completion, scientific_inquiry, equation; multipart is a question-level structure filter. Tags are non-exclusive: a multiple-choice calculation has both tags, while extended responses can contain calculation or diagram parts. examSection records the original paper section independently. Preserve shared stimulus, images and part dependencies when selecting a whole question for a future paper; these tags do not imply that every part can safely be extracted alone.

The SQLite register includes question_parts, subtopics, question_subtopics, part_subtopics and part_types for future filtering by topic, subtopic, format, skill, mark total, time and source. Held questions have unclassified metadata and must be excluded from paper building until reviewed. The register build rejects published questions lacking classification metadata.

### Typed questions and necessary visual assets
Render the question wording, answer choices and tables as native text. Retain original diagrams, graphs, photos and their labels as separate visual assets. Do not include screenshots of entire questions or duplicate typed questions/options within images. Keep multipart prompts, original order, marks and classification metadata. `originalStem` supports duplicate checks; `searchText` supports search.

`keyResources` can link to a supplied marking-key excerpt when complex diagrams or marking tables cannot be faithfully represented in native text. These references appear only after reveal, separately from the question body. Native key text remains in `parts[].solution`.

`additionalSources` records repeated source occurrences; excluded repeat rows use `duplicateOf` in the provenance register.
