# githubscratch

Collecting fragments in public, one a day, and stitching them into things.

**Site:** https://projectionheart.github.io/githubscratch/
**The stitch:** [fragments/](fragments/), every fragment in order, each linked to the ones it connects to.

## How it works

Every morning a prompt asks for a fragment: a line, a screenshot, a file or a clip. Reply and it's committed to `fragments/` as `YYYY-MM-DD-<slug>.md`, with any attachments in `fragments/assets/YYYY-MM-DD-<slug>/`. Each new fragment gets a *Stitches with* line linking the earlier fragments it connects to, and is added to the running stitch in `fragments/README.md`. Let the prompt pass and nothing happens.

Start a reply with `stitch:` plus a prompt, screenshot or video (or nothing at all) to get three ways to stitch it with recent fragments into something you could ship in an hour. Reply `save 1/2/3` to keep one as a fragment, or `build 1/2/3` to have it built as a single page under `docs/stitches/` and put live on the site.

## Kinds of fragment

- **TIL**: one thing you figured out today, in a few lines.
- **Tiny demo**: a single-file HTML/JS sketch or effect.
- **Prompt that worked**: the exact prompt, what it produced and what you changed.
- **Teardown**: how a site, tool or effect you admired works.
- **Before/after**: a change shown side by side, with a line on why the second is better.
- **Opinionated list**: ranked tools, tricks or picks.
- **Open question**: something you haven't solved yet. Turn it into an issue to invite comments.
- **Weekly changelog**: what you built, learned and dropped this week.

## Making it social

- Pin this repo to your profile.
- Link your best stitches from your profile README.
- Add topics like `til` or `generative-art` so people can find it.
