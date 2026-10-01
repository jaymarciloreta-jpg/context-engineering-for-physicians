---
title: Scheduled Recipes
status: published
tags: [recipes, cadence, scheduling]
date: 2026-10-01
---
Recipes designed to run on a timer. Save the recipe in `skills/`, run it by hand a couple of times until you like the result, then schedule it:

```text
Run the recipe in skills/morning-brief.md every weekday at 6:00 am.
```

All of these produce a note for you to read. None of them send, post, or delete anything. Keep it that way until you have watched a task work for weeks. See [[C4 - Cadence]].

> [!note] Scheduled tasks and your files
> Scheduled tasks can reach your vault only while the Claude desktop app is open on your computer. Tasks that only use connectors (calendar, email) can run without it.

### Morning brief
File: `skills/morning-brief.md` · Suggested schedule: weekdays, 6:00 am

```markdown
# Recipe: Morning brief

1. Read today's calendar. List each commitment with time and location.
2. For each meeting, note what I should prepare, based on the matching
   project or area note.
3. From email (if connected): the three messages that most need me today.
   Subject and sender only. No patient details.
4. From project briefs: any deadline in the next seven days.
5. Keep it under 250 words. Save to Daily as "[date] Brief.md".
```

### Evening inbox sort
File: `skills/evening-sort.md` · Suggested schedule: daily, 8:00 pm

```markdown
# Recipe: Evening inbox sort

1. Read every note in 00 Inbox and today's daily note.
2. For each item, propose where it belongs (project, area, resource).
3. Move notes that clearly belong somewhere. Leave unclear ones in 00 Inbox.
4. Pull out action items and add them to the Next line of the matching
   project brief.
5. Write a short summary of what you moved and why at the bottom of
   today's daily note. Never delete anything.
```

### Weekly digest
File: `skills/weekly-digest.md` · Suggested schedule: Sundays, 6:00 pm

```markdown
# Recipe: Weekly digest

1. Read the past seven daily notes and every project brief.
2. Summarize: what got done, what moved, what stalled.
3. A table of projects: status, next step, deadline, stuck yes or no.
4. Run the weekly-plan recipe for the coming week.
5. Save to Daily as "Week of [date] Digest.md".
```

### Literature watch
File: `skills/literature-watch.md` · Suggested schedule: Mondays, 7:00 am

```markdown
# Recipe: Literature watch

1. Read the research questions in each literature project's CLAUDE.md.
2. Search the literature (PubMed connector or web) for papers from the
   last seven days that match.
3. For each relevant paper: citation, one-line finding, and which of my
   questions it touches. Skip anything weak or off-topic.
4. Save to the literature project as "Watch - [date].md". Do not add
   papers to the wiki until I approve the list.
```
