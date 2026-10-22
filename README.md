# ATAR Practice Studio

Standalone ATAR science practice website. Independent of Science Vault.

## Hosting
Publish with GitHub Pages from the main branch, root directory. No build step or dependencies required.

## Features
- Five subjects and 12 original sample questions
- Answer-key marking and worked explanations; no AI services or API keys
- Subject/year/topic filters, bookmarks and progress stored in the browser

Open index.html locally to run. Browser progress is specific to each device and website address; it does not transfer between hosting providers.


## Question provenance register

Open `register.html` to search source exams, original question numbers, subjects, year levels, topics, upload batches, marks and publication/review status. Downloads are in `data/question-register.{sqlite,json,csv}`. This is a static, GitHub-backed register, not a server accepting uploads.

For every future import:
1. Add the source's stable ID, question-ID prefix, exam/key filenames, provider, exam year and upload batch to `data/register-config.json`. Record the actual upload date; leave unknown dates null.
2. Add questions to the bank with stable IDs. Add unresolved questions to the configuration's held list.
3. Run `python3 scripts/build-register.py` from the repository. Requires Python 3 and Node, with no extra packages.
4. Review `duplicateCandidates` in JSON. IDs and source/question pairs are unique; content hashes identify identical-content candidates, not all paraphrased or image-equivalent duplicates. Missing source metadata fails the build.
5. Commit the updated banks, configuration, JSON, CSV and SQLite together. Rebuild whenever topics change. Bump the JSON cache version in register.js for subsequent releases.

Removed rows are retained with archived status. Previously recorded dates survive rebuilds. Existing upload dates were backfilled from chat upload history; exact times were not recorded. Original documents are identified by filename and are not republished as downloadable source files. All register information is public with this GitHub Pages site.
