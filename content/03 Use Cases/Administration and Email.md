---
title: Administration and Email
status: published
tags: [use-cases, admin, email, planning]
date: 2026-10-01
---
Administrative work is where most physicians lose the most time, and it is also the safest place to start, because most of it involves no patient data. Email, scheduling, meetings, committee work, and weekly planning are all good candidates.

> [!warning] Check your email first
> If your work inbox contains patient information (and many hospital inboxes do), do not connect it to an AI tool unless your institution has approved that setup. Start with an academic or personal account, or paste in de-identified threads by hand. See [[Patient Privacy and PHI]].

## Email triage

With an email connector set up (see [[C2 - Connections]]), this is the recipe most people keep forever:

```text
Look at my unread email from the last 24 hours. Sort it into:
1. Needs me today (and why)
2. Needs a reply, but you can draft it
3. FYI only
4. Can be ignored
Draft replies for group 2 in my voice from CLAUDE.md, as drafts only.
Do not send anything.
```

Add a section to your `CLAUDE.md` that tells the AI how you handle email: who always gets a fast reply (your chair, your fellows, your OR scheduler), what you always decline, your standard sign-off.

## Meetings to action items

After a committee or research meeting, paste or dictate your notes into a note in `00 Inbox`, then:

```text
Turn the meeting note in 00 Inbox into: decisions made, action items with
owners and dates, and open questions. File it in the right project or area
folder and add my action items to my task list.
```

## Planning your week

```text
Look at my calendar for next week and the Next lines in all my project
briefs. Draft a weekly plan: what has to happen on which day, where my
open blocks are, and which two projects to move forward in them.
Flag any conflicts or days with no time for prep.
```

## Other admin recipes

- **Decline gracefully:** "Draft a polite decline to this invitation. Offer a colleague's name if appropriate. Keep it to three sentences."
- **Letters of recommendation:** "Using my notes on this trainee in 02 Areas/Teaching, draft a letter of recommendation. Mark anything I need to verify."
- **Committee reports:** "Turn these bullet points into a one-page report for the committee, using the format of last year's report in the same folder."
- **Travel and CME:** "Summarize the CME requirements I still need this cycle from the notes in 02 Areas/Licensing and suggest courses that fit."

## Make it run on its own

The morning brief and weekly digest on [[Scheduled Recipes]] combine your calendar, inbox, and project briefs into one short note waiting for you each day.
