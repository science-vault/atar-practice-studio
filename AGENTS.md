# Question import maintenance

For every question import, removal, source correction or topic regrouping, update the provenance register in the same commit. Register all sources and held questions in data/register-config.json, retain stable question IDs, then run python3 scripts/build-register.py. Review duplicateCandidates in the generated JSON; do not silently duplicate source/question pairs. Commit all generated JSON, CSV and SQLite outputs. Upload dates must be evidenced or null. Bump the question-register JSON cache version in register.js when register data changes.
