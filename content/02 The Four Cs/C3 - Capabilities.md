---
title: C3 - Capabilities
status: published
tags: [four-cs, capabilities, skills]
date: 2026-10-01
---
Context is what the AI knows. Connections are what it can reach. Capabilities are what it can actually do. This is where the setup starts paying you back, because a capability is a real task taken off your plate.

## More than a chat box: the assistant that works

A plain chat box answers questions. An assistant that can use your files and tools does work. It takes steps in a loop: read a file, search for something, write a draft, check it, fix it, and keep going until the task is done. That is what Claude does when you give it a folder.

The practical point: you are no longer asking for advice you then have to act on. You are handing over the task itself, and reviewing the result.

## Recipes you can save: skills

The most useful capability is one you can reuse. A saved set of steps for a task is called a **skill**, and it is just a plain text file written in everyday language. No code.

You saw this in the [[Your 20-Minute First Win|first win]]: you had the AI write a patient handout, then saved those steps as a recipe. Now the next handout takes seconds, not half an hour. Anything you do more than a few times is worth turning into a recipe: a referral letter, a weekly plan, a slide outline, a literature check.

A recipe looks like this:

```markdown
# Recipe: Referral thank-you letter

When I say "thank-you letter for [referring doctor] about [topic]":

1. Read CLAUDE.md for my voice.
2. Write a short letter (under 150 words): thank them, one line on
   the plan in general terms, an invitation to call me directly.
3. No patient identifiers. Use [Patient] as a placeholder.
4. Save to 00 Inbox as "Letter - [doctor] - [date].md".
5. Show me the draft. Do not send anything.
```

Two ways to use recipes:

1. **Keep them in your vault** in a `skills/` folder, and say "run the recipe in skills/thank-you-letter.md." Simple, visible, easy to edit.
2. **Install them as Claude skills** (in settings). Claude then uses them automatically when your request matches, without being told.

Because recipes are just text, you can edit them, improve them, and share them with a colleague the same way you would share a document. A ready-made set is in the [[Recipe Library]].

## A menu of uses for physicians

Here is the kind of work the AI can take on once it knows you and is connected. None of these require patient data to be useful.

- **Email:** sort the inbox, summarize long threads, draft replies in your voice. See [[Administration and Email]].
- **Writing:** first drafts of papers, letters, abstracts, and patient handouts, in your format. See [[Projects and Papers]].
- **Talks and slides:** turn a rough outline into a structured deck for grand rounds, tumor board, or a lecture. See [[Talks and Teaching]].
- **Planning:** turn a messy week and a pile of to-dos into a clear, ordered plan.
- **Research:** summarize a paper against your question, or scan several for the findings that matter. See [[Research and Literature]].
- **Teaching:** build a teaching case, a quiz, or a one-page explainer for residents.
- **Spreadsheets and data:** clean a de-identified dataset, build a table, draft a figure.
- **Ideas and devices:** think through a new technique or device concept and sketch early 3D-design (CAD) ideas. See [[Ideas Devices and CAD]].

## Match every capability to your context

A common mistake is asking for a capability without grounding it in your context. A summary written for no one in particular is generic. A handout written without your voice sounds like a brochure. Work inside your vault so the AI reads your `CLAUDE.md` and the relevant project brief. Capabilities and context are a pair; neither works well alone.

## Keep yourself in the loop where it counts

Not every task should run on its own, especially at first and especially where judgment matters. The safe pattern: **the AI drafts or proposes, you review and approve, then it finishes.** Use this for anything that goes to a patient, a colleague, or the record.

As you build confidence in a specific, low-stakes task, you can loosen the checkpoint. For anything touching clinical judgment, keep yourself in the loop on purpose. See [[Keep a Human in the Loop]].

## What to do next

- Turn one task you repeat into a saved recipe this week.
- Work inside your vault so the result sounds like you.
- Then move on to [[C4 - Cadence]] to let recipes run on a schedule.
