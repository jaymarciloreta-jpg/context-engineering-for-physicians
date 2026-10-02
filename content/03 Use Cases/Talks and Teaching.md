---
title: Talks and Teaching
status: published
tags: [use-cases, teaching, presentations]
date: 2026-10-01
---
Building a talk usually means hours in slide software rearranging boxes. The better split: you supply the expertise and the story; the AI does the structure, the first draft, and the formatting.

## From outline to deck

Start with the thinking, not the slides. Write a rough outline as a note (bullets are fine), including the audience and the one thing they should remember.

```text
I'm giving grand rounds to otolaryngology residents and faculty on
endoscopic skull base reconstruction. 40 minutes. The one takeaway:
[your takeaway]. Using my outline in this folder, draft a slide-by-slide
plan: title, 3 bullets max per slide, and speaker notes. Mark where I
should add my own images or cases.
```

Review the plan, fix the story, then ask Claude to build the actual deck. Claude can create slides directly, or work through a presentation connector if you have one. Keep each talk in its own project folder so the next version starts from this one.

## Teaching residents and students

- **Teaching case:** "Write a teaching case on acute invasive fungal sinusitis for PGY-2s: a made-up presentation, three decision points with questions, and an answer key explaining the reasoning."
- **Quiz:** "Write 10 board-style multiple-choice questions on this chapter, with explanations for every answer choice."
- **One-page explainer:** "Write a one-page explainer on reading a sinus CT for medical students: what to look at, in order, with common mistakes."
- **Feedback:** "Turn my rough notes on this resident's rotation into specific, constructive written feedback using the program's milestone language."

> [!note] Cases must be invented or fully de-identified
> Teaching cases should be fictional or stripped of every identifier, including dates, rare details, and images that could identify a patient. See [[Patient Privacy and PHI]].

## Reuse your best material

Keep a `03 Resources/Teaching` folder with your past talks, slide outlines, and cases as notes. Then:

```text
I need a 15-minute version of my skull base talk for medical students.
Start from my grand rounds outline in 03 Resources/Teaching and cut it
down to the essentials for that audience.
```

The more you keep, the less you rebuild.

## CT-based teaching images

For teaching views and reviewed 3D anatomy models from public CT data, see [[CT Scans and 3D Slicer with MCP]]. It explains how an assistant can help operate Slicer while you verify the anatomy.
