---
title: Projects and Papers
status: published
tags: [use-cases, projects, writing]
date: 2026-10-01
---
Most physicians juggle a dozen projects at once: papers, grants, protocols, a QI initiative, a committee report, a book chapter. The usual problem is not doing the work; it is re-loading each project into your head (and into the AI) every time you return to it. A folder and a brief per project solves that.

## The setup

One folder per project in `01 Projects`. Inside each:

```text
01 Projects/
  Septoplasty QI Project/
    CLAUDE.md        the brief: goal, team, status, next steps, rules
    drafts/          manuscript or report drafts
    data/            de-identified data only
    notes/           meeting notes, emails pasted in, ideas
    log.md           a running log: one line per working session
```

The brief template is on the [[Templates]] page. The two lines that matter most are **Status** and **Next**. Keep them current and the AI always knows where you are.

## The working loop

Every time you sit down on a project:

1. Open a fresh Claude task on the vault and say: "Let's work on the Septoplasty QI project. Read its brief and tell me where we are."
2. Do the work together.
3. Before you stop: "Update the brief's Status and Next lines and add a line to log.md."

That last step takes ten seconds and is what makes the system compound. Next week, step 1 gives you a perfect handoff.

## Recipes for writing

- **Outline to draft:** "Using the outline in drafts/outline.md and the notes folder, write a first draft of the introduction in my academic voice. Mark any claim that needs a citation with [CITE]."
- **Tighten a draft:** "Edit drafts/discussion.md to cut 20 percent of the words without changing meaning. Show me a list of what you cut."
- **Journal formatting:** "Reformat the manuscript for the target journal's author guidelines in notes/guidelines.md. List anything you could not resolve."
- **Coauthor update:** "Draft a short email to the coauthors with where the project stands and what I need from each of them by Friday. Do not send it."

## A project dashboard

Once you have several projects, ask for an overview:

```text
Read the CLAUDE.md in every folder under 01 Projects. Give me a table:
project, status, next step, deadline, and anything that looks stuck.
```

This works because every project has the same small brief in the same place. It is a good weekly habit, and it can run on a schedule (see [[Scheduled Recipes]]).

## Finishing a project

When a project is done, move its folder to `04 Archive` (do not delete it). Ask the AI to write a three-line summary at the top of the brief: what it was, what came of it, where the final version lives. Archived projects are still searchable, so your past work keeps informing future work.
