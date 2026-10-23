# Question import maintenance

For every question import, removal, source correction or topic regrouping, update the provenance register in the same commit. Register all sources and held questions in data/register-config.json, retain stable question IDs, then run python3 scripts/build-register.py. Review duplicateCandidates in the generated JSON; do not silently duplicate source/question pairs. Commit all generated JSON, CSV and SQLite outputs. Upload dates must be evidenced or null. Bump the question-register JSON cache version in register.js when register data changes.

For future question imports, classify both the question and each part using the required assessment-builder metadata in QUESTION_FORMAT.md. Select stable subtopic IDs and question-type codes from curriculum.js; preserve response-input type separately. The register build must pass before publication.

For every future import, run `python3 scripts/check-duplicates.py` as well as the register build. Resolve every unreviewed text/near-match candidate and record the reason in `duplicateReviewDecisions` in the register config. Compare original prompts, answer choices and diagrams; matching topics alone are not duplicates. Keep excluded source occurrences in `held` with `duplicateOf` pointing to the retained active question, and include all source references on that question.

Render question wording, options and tables as native text. Include images only when needed for diagrams, graphs, photographs or other visual stimuli, with original labels retained. Do not embed full-question screenshots or duplicate typed question text in images. Preserve optional original key references separately from the question body.
