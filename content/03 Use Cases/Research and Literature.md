---
title: Research and Literature
status: published
tags: [use-cases, research, literature]
date: 2026-10-01
---
Keeping up with the literature is the clearest win for this setup. The pattern below turns a pile of PDFs into a living, searchable summary of your field that gets better every week.

## The pattern: a literature wiki the AI maintains

Andrej Karpathy, a well-known AI researcher, popularized a simple idea: keep your raw sources in one folder, and let the AI "compile" them into a small wiki of linked summary pages. You read and ask questions of the wiki; the AI keeps it up to date. Any good answer it gives you gets filed back into the wiki, so it grows.

Adapted for a physician:

```text
01 Projects/
  Olfaction Literature/
    CLAUDE.md          what this wiki covers and the questions you care about
    raw/               PDFs and exported abstracts, untouched
    wiki/
      index.md         the table of contents, kept current by the AI
      topics/          one page per concept (e.g. "olfactory training")
      papers/          one short summary page per paper
      open-questions.md
```

The `CLAUDE.md` for this folder is where the value comes from. Example:

```markdown
# Literature wiki: Olfaction after sinus surgery

## Questions I care about
1. Does extent of surgery change long-term olfactory outcomes?
2. Which validated smell tests are used, and are they comparable?
3. What is the evidence for olfactory training after surgery?

## How to summarize a paper
- One page per paper in wiki/papers, named "Author Year - short title".
- Sections: Design and size, Population, Key findings (with numbers),
  Limitations, How it answers my questions (by number), Citation.
- Grade the evidence plainly: RCT, cohort, case series, review.
- Never invent numbers. If a value is not in the paper, say so.

## After adding papers
- Update the topic pages and index.md. Add new open questions.
```

## Recipes

**Add new papers:**

```text
I added new PDFs to raw/. Summarize each one into wiki/papers following
CLAUDE.md, then update the topic pages and the index.
```

**Ask the wiki a question:**

```text
Using only the wiki and the papers in raw/, what does the evidence say about
question 3? Cite the paper pages. Save the answer to wiki/answers/.
```

**Health check (monthly):**

```text
Check the literature wiki: broken links, papers in raw/ with no summary,
topic pages that contradict each other, and claims with no citation.
List what you find, then fix what you can.
```

## Connections that help

- **PubMed or a literature search connector:** "Find RCTs and systematic reviews from the last two years on olfactory training after FESS. Add the abstracts to raw/."
- **Your reference manager or cloud drive** where PDFs already live.

## Cadence

A weekly literature watch keeps the wiki current without you thinking about it. See the recipe on [[Scheduled Recipes]].

## Other research tasks that work well

- **Abstract from a draft:** "Write a 250-word structured abstract from the results and discussion in this draft. Keep every number exactly as written."
- **Reviewer response:** "Draft a point-by-point response to these reviewer comments. Mark any place I need to decide or add data."
- **Grant aims:** "Turn these notes into a one-page Specific Aims draft, using the structure in Templates/specific-aims.md."
- **Data cleanup (de-identified only):** "Clean this de-identified spreadsheet: standardize column names, flag missing values, and write a data dictionary."

> [!warning] Verify every citation and number
> AI can produce citations that look real and are not, or misstate a number. Always open the source for anything that goes into a manuscript, a talk, or a clinical decision. Ask the AI to quote the exact sentence it relied on. See [[When AI Gets It Wrong]].
