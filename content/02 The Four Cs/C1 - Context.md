---
title: C1 - Context
status: published
tags: [four-cs, context]
date: 2026-10-01
description: "Why context beats better prompts, how to write a CLAUDE.md, and how to organize notes so AI stays focused."
---
Context is the first and most important of the Four C's. It is everything the AI knows about you before you ask it to do anything: your specialty, your audiences, how you write, what a good result looks like, and what to avoid. Get this right and every answer improves. Skip it and you get the same generic output everyone else gets.

A simple way to picture it: context is the onboarding you would give a sharp new assistant who never forgets anything you tell them. You explain it once, and they carry it into every task.

## Why context beats a better prompt

People spend a lot of energy trying to write the perfect prompt. Useful, but it has a ceiling. A great prompt with no context still produces a generic answer, because the AI is guessing about you. A modest prompt with good context produces something that sounds like you wrote it. The leverage is in the context, not in clever wording.

The goal of this chapter is simple: **reduce how often the AI has to guess.**

## Plain text and Obsidian: where context lives

Your context should live in plain text (markdown) files, the kind Obsidian uses. Two reasons:

1. **Plain text is simple and permanent.** It is just words in a file on your computer. It is private, it is yours, and it will still open in 20 years. No account, no lock-in.
2. **AI reads plain text easily.** A folder of clear notes is something the AI can open, search, and use directly. A pile of PDFs and Word files is harder for it and for you.

Start writing the things you want the AI to know as plain notes, and you are already ahead.

## Your about-me file (CLAUDE.md)

The single highest-value thing you can make is one short file that introduces you. Name it `CLAUDE.md` and put it at the top of your vault. Claude looks for this exact name and reads it automatically at the start of every task. Think of it as the first page of your onboarding manual.

Keep it short and concrete. A starter you can copy:

```markdown
# About me

I am an ENT surgeon treating adults. Subspecialty: rhinology and skull base.
Academic practice: clinic two days a week, OR two days, one research/admin day.

## How I write
- Patients: plain language, about 8th grade level, warm and direct, no scare words.
- Colleagues: concise and clinical. Lead with the point.
- Trainees: explain the why, not just the what.
- My handout format: what it is, why it matters, what to expect, when to call.

## What I want help with
- Email triage and replies, weekly planning, papers and abstracts, talks.
- Be specific to my practice, not generic.
- Flag anything that needs my judgment instead of guessing.

## How this vault is organized
- 00 Inbox: unsorted. 01 Projects: active work. 02 Areas: ongoing roles.
- 03 Resources: reference. 04 Archive: done. skills: saved recipes.

## Hard rules
- Never include identifiable patient information in anything.
- Never send email or post anything without my approval.
- Never delete files; move them to 04 Archive instead.
- When unsure, ask me rather than invent. Cite sources for clinical claims.
```

That is enough to change every answer you get. You will keep improving it for months, and that is normal. More versions are on the [[Templates]] page.

## Context files inside projects

You can put a smaller `CLAUDE.md` inside any project folder. When Claude works in that folder, it reads both: the top one (who you are) and the project one (what this work is). A project brief needs only a few lines:

```markdown
# Project: Olfaction outcomes paper

Goal: submit to the target journal by March 1.
Team: me (senior author), fellow (first author), statistician.
Status: data cleaned; methods drafted; results pending.
Next: draft results from the tables in /data; reconcile references.
Rules: use the journal's reference style. Do not change the methods without asking.
```

This is how Claude picks up exactly where you left off, weeks later, without you re-explaining anything.

> [!tip] End every working session with a status line
> Before you close a task, ask: "Update the Status and Next lines in this project's CLAUDE.md." It takes ten seconds and it is the single best habit for long projects. Anthropic's engineers call this structured note-taking: the AI writes its progress down outside the conversation so the next session can pick it up.

## A tidy folder setup (the PARA idea)

As you add more notes, you want the AI to know what is active and where new things belong. A simple, well-tested layout called **PARA** does this:

- **Projects:** active work with an end, like a paper, a grant, or a talk.
- **Areas:** ongoing responsibilities with no end, like your clinic, your research program, your teaching.
- **Resources:** reference material you may want later, like guidelines, templates, and how-tos.
- **Archive:** finished or inactive items, kept for reference but out of the way.

This does two jobs. It tells the AI what matters right now, and it gives every new note an obvious home. When a meeting note or a draft comes in, the AI can file it in the right place instead of guessing. The [[Starter Kit]] has this layout ready to go.

## Show a little, not everything

A natural instinct is to hand the AI everything at once. Resist it. Feeding it too much at the start makes its answers worse, the same way a cluttered desk makes you slower.

This is not just intuition. Anthropic's engineering team describes how a model's ability to recall details drops as you stuff more into a conversation (they call it **context rot**), and recommends giving the AI "the smallest possible set of high-signal" information for the task. Think of it like a sign-out: a good handoff is short and specific, not a printout of the whole chart.

The better pattern: start each task with the short summary (your `CLAUDE.md`) and let the AI open the specific project folder only when the task needs it. Lean information up front, more detail on demand. People who build these systems call this **progressive disclosure** or **just-in-time retrieval**. You do not have to manage it by hand; a tidy folder setup with clear names makes it happen naturally, because the AI can see the folder names and open only what it needs.

Two practical rules follow from this:

- **One task per conversation.** When you switch from a paper to your inbox, start a fresh task. Long, wandering conversations get worse over time.
- **Name things clearly.** `Olfaction outcomes paper` beats `Project 3`. Folder and file names are the AI's map.

## Keep it current so it compounds

Context that is out of date is worse than none, because the AI will trust it. Build one small habit: when something changes, or when you notice the AI repeating the same mistake (usually a sign of a gap in your notes), take a minute to update the relevant file. You can even ask Claude to do it:

```text
You keep writing my patient handouts too long. Add a rule to CLAUDE.md
so handouts stay under one page.
```

Good context compounds. The more you add and the better you keep it tidy, the more useful the whole setup gets. The key word is tidy. Clean as you go, summarize, and remove what is stale, so your notes stay a clear summary instead of a growing pile.

## What to do next

- Make your `CLAUDE.md` today. Five minutes now pays off in every future task.
- Add a project brief to your most active project.
- Set up the PARA folders when you have more than a handful of notes.
- Then move on to [[C2 - Connections]] to let the AI reach your real work.
