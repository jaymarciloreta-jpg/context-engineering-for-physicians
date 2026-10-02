---
title: Your 20-Minute First Win
status: published
tags: [getting-started, first-win]
date: 2026-10-01
---
The fastest way to understand this is to do one small thing and feel the difference. This takes about 20 minutes and uses no patient information. By the end you will have a useful result and a recipe you can reuse.

You need two things: the Claude desktop app (see [[Set Up Claude]]) and a folder on your computer. If you already have Obsidian, use your notes folder. If not, make an empty folder called `AI` for now.

> [!tip] Prefer a fully worked example?
> Try [[Practice - Meeting Notes to Actions]] first. It includes fictional source notes and a checklist of the correct result.

## The task

You will give the AI a little background about you, then have it do one real piece of work that sounds like you. We use a patient education handout because it is useful, shareable, and needs no private information. If you prefer, swap in one of the alternatives at the bottom.

## Step 1: Tell the AI who you are (5 minutes)

In your folder, make a new note called `CLAUDE.md` (we use this filename throughout the wiki; explicitly ask Claude to read it and confirm the relevant instructions before starting). Write a few plain lines, for example:

```markdown
# About me

I am an ENT surgeon. I treat adults.
My patients are smart but not medical, so write at about an 8th grade level.
My tone is warm, direct, and reassuring. Short sentences. No scare language.
When I write handouts I like: what it is, why it matters, what to expect, when to call.
```

That is it. This little file is your **context**. It is the difference between a generic answer and one that sounds like you.

## Step 2: Ask for the real thing (10 minutes)

Open Claude, choose your folder as the place to work, and ask:

```text
Using the voice and format in CLAUDE.md, write a one-page patient handout
on what to expect after a tonsillectomy in adults. Save it in this folder.
```

Read what it gives you. It will not be perfect. That is the point of the next step.

## Step 3: Refine, then save the recipe (5 minutes)

Tell it what to fix, in plain words: "Make the pain section more reassuring," or "Add a short list of warning signs," or "Shorten the intro." Go back and forth two or three times until it is genuinely good.

Then capture it so you never start from scratch again:

```text
Save the steps we just used as a reusable recipe called "patient handout"
in a file called skills/patient-handout.md, so I can run it for any topic.
```

Now you have two things: a finished handout, and a recipe you can reuse for the next topic in seconds. Next time you just say: "Run the patient handout recipe for septoplasty."

> [!note] Check the medicine
> You are the expert. Read every clinical statement in the handout before it goes to a patient. The AI writes well; it is not always right. See [[When AI Gets It Wrong]].

## What just happened

You used three of the Four C's without thinking about it:

- The `CLAUDE.md` note was **Context** ([[C1 - Context]]).
- Letting Claude read and write in your folder was a **Connection** ([[C2 - Connections]]).
- The saved recipe was a **Capability** ([[C3 - Capabilities]]).

That is the whole idea, in miniature. The rest of the wiki shows you how to do this for bigger parts of your work.

## If a handout is not your thing

Pick whichever fits your day. The three steps are the same: give it your about-me file, ask for the real thing, refine and save the recipe.

- **Referral or thank-you letter:** draft a letter to a referring physician in your voice.
- **Summarize a paper:** drop a journal article PDF in the folder and ask for the three findings that matter for your practice, against a question you care about.
- **Clear the mental clutter:** dump your loose to-do thoughts into a note and ask the AI to turn them into an organized plan for the week.

Ready-made versions of all of these are in the [[Recipe Library]].

## One reminder

No patient information in a tool that is not approved for it. Use general topics or made-up examples for this exercise. See [[Patient Privacy and PHI]].
