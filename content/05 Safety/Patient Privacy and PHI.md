---
title: Patient Privacy and PHI
status: published
tags: [safety, privacy, phi, hipaa]
date: 2026-10-01
---
This is the most important page on the site. The rest of the wiki is about doing more with AI; this page is about the line you do not cross.

> [!warning] The one rule
> Identifiable patient information goes only into tools your institution has approved for that exact use. A personal AI subscription is not an approved tool for patient data. When in doubt, the answer is no.

*This page is general guidance, not legal advice. Your institution's privacy and compliance office has the final word.*

## What counts as patient information

Protected health information (PHI) is health information that can be tied to a person. Under HIPAA's de-identification "safe harbor" standard, the identifiers to remove include names, any geographic unit smaller than a state, all dates (except year) related to the person, phone and fax numbers, email addresses, medical record numbers, account and health plan numbers, license and device serial numbers, URLs and IP addresses, biometric identifiers, full-face photos, and any other unique identifying number or characteristic.

That last one matters in specialties like ours. A rare tumor in a named town during a specific month can identify someone without a single name. So can an operative video with a visible face, or a CT with a burned-in name and date.

## The three tiers

| Tier | Examples | Where it can go |
|---|---|---|
| **No patient data** | Your schedule, papers, talks, admin email, committee work, general medical topics | Your personal setup. This is where almost all the value is. |
| **De-identified data** | A truly de-identified dataset, a fictional teaching case | Your personal setup, if it is genuinely de-identified and your institution's rules allow it |
| **Identifiable patient data (PHI)** | Notes, clinic letters about a named patient, EHR exports, clinical inbox, images with identifiers | Only institution-approved tools covered by a Business Associate Agreement (BAA) and your institution's policies |

Some AI vendors offer enterprise plans that institutions can cover with a BAA. Whether a given setup is approved is a question for your institution, not something to infer from a vendor's website.

## Practical rules

1. **Start with the no-patient-data tier.** Email (if not clinical), calendar, writing, research, teaching. You will not run out of value.
2. **Do not connect clinical systems.** No EHR, clinical inbox, or patient messaging connectors unless your institution has explicitly approved that setup.
3. **Check your work email.** Many hospital inboxes contain PHI. Ask IT before connecting it.
4. **Use placeholders.** Write `[Patient]`, `[Date]`, `[MRN]` in drafts and fill them in inside the approved system.
5. **Invent teaching cases.** Change details enough that no real patient could be recognized, or write them from scratch.
6. **Scrub images.** Remove burned-in names and dates, crop faces, strip file metadata.
7. **Keep PHI out of your vault.** Your Obsidian vault is plain files, often in a personal cloud folder. Treat it as a place for your knowledge, not patient records.
8. **Tell the AI the rule.** Put "Never include identifiable patient information" in your `CLAUDE.md`. It is a backstop, not a substitute for your own care.

## If you make a mistake

If you realize identifiable patient information went somewhere it should not have, do not try to quietly clean it up. Contact your institution's privacy office promptly. They deal with this regularly and there are often required steps.

## A quick test before you paste

Ask yourself: if this text were printed and left on a coffee shop table, could anyone figure out who the patient is? If yes, it does not go in.

See also: [[Keep a Human in the Loop]], [[C2 - Connections]].
