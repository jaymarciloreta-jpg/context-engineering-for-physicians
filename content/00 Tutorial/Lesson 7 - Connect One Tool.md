---
title: Lesson 7 - Connect One Tool
status: published
tags: [tutorial, connections]
date: 2026-10-01
---
**Goal:** one tool connected safely, so Claude can see your real week. **Time:** 10 minutes.

## Read this first

A connector acts as you and can reach whatever your sign-in reaches.

> [!warning] The hard line
> Do not connect an EHR, a clinical inbox, or anything that holds patient information unless your institution has approved that exact setup. Hospital email often contains patient details. Check with IT before connecting it. See [[Patient Privacy and PHI]].

That is why the recommended first connection is your **calendar**: high value, low risk.

## Steps

1. In Claude, open the **Connectors** section of settings.
2. Add your calendar (Google Calendar or Outlook) and sign in.
3. Leave approvals on. Claude should ask before creating or changing anything.
4. Try a read-only task.

## Do it with Claude

```text
Look at my calendar for this week. What does it look like, where are my
open blocks, and what needs prep? Do not change anything.
```

Then combine it with your context:

```text
Run the recipe in skills/weekly-plan.md using my real calendar.
```

## Checkpoint

- [ ] One connector added (calendar recommended).
- [ ] Claude answered a question about your real week.
- [ ] Nothing connected touches patient data.

More: [[C2 - Connections]].

**Next:** [[Lesson 8 - Put It on a Schedule]]
