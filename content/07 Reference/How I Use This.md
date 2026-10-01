---
title: How I Use This
status: published
tags: [reference, example, workflow]
date: 2026-10-01
---
*By Jaymarc Iloreta, MD.* Colleagues asked what this looks like in practice, so here is my own setup, simplified. You do not need any of it on day one. It grew one piece at a time over many months, and every piece started as a single recipe.

## Two vaults, one method

I keep two Obsidian vaults, both synced through Dropbox:

- **A main vault** for clinical academics, teaching, research, projects, and life admin.
- **A company vault** for my medical device startup, kept separate so its context never bleeds into anything else.

Both use the same layout: a `CLAUDE.md` at the top, PARA-style folders, and a `CLAUDE.md` brief inside every project. Separate vaults are a simple way to keep the AI's context clean: when I work on the company, the AI only sees the company.

## Conventions that keep the AI honest

These rules live in my `CLAUDE.md` files and they have saved me from a lot of cleanup:

- **AI-written files are labeled.** Any note Claude creates starts with `(C)` in the filename, so I always know what I wrote and what it wrote.
- **Ask before editing my files.** Claude can freely edit its own `(C)` files, but asks before changing anything I wrote.
- **Never delete; archive.** Nothing is ever deleted, only moved to an archive folder.
- **Consistent properties.** Every note has a `status:` and at least two `tags:`, so the AI can find, sort, and report on anything.
- **A pipeline for things I publish.** Projects like this wiki have `Drafts`, `In Review`, and `Published` folders, and pages move through them in order.

## Recipes and schedules I actually use

- **A daily briefing** that runs each morning and pulls my calendar and open project items into one short note.
- **A literature wiki** for my device's clinical area. Papers go into a raw folder; Claude maintains summary pages and topic pages; a scheduled refresh checks PubMed for new papers. It is published as a website with the same tool this site uses. The pattern is on [[Research and Literature]].
- **A vault "gardener"**: a small set of scheduled maintenance recipes that find broken links, orphan notes, and stale project briefs. Every change it proposes waits for my approval before anything moves.

## What I would tell a colleague starting today

Do not try to build this. Build a `CLAUDE.md` and one recipe. Use them for a week. The next piece will be obvious, because you will notice the thing you keep re-explaining or re-doing. That is how all of the above happened.

Start with the [[Your 20-Minute First Win|20-minute first win]] or the [[Interactive Tutorial]].
