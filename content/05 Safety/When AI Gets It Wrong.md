---
title: When AI Gets It Wrong
status: published
tags: [safety, troubleshooting, limitations]
date: 2026-10-01
---
It will. The question is whether you catch it, and whether your setup learns from it. Here are the common failure modes, how to check for them, and how to fix the cause.

## What AI is bad at

| Failure | What it looks like | How to catch it |
|---|---|---|
| **Made-up facts and citations** | A reference that looks perfect and does not exist; a statistic with no source | Open every source. Ask "quote the exact sentence you relied on." |
| **Confident errors** | A wrong drug interaction or outdated guideline stated with total certainty | You are the expert. Check anything clinical against a primary source. |
| **Number drift** | A 23 percent becomes 32 percent in the abstract | Ask it to copy numbers exactly and list where each one came from. |
| **Generic output** | A handout that could be from any clinic | Your context is thin. Add detail to `CLAUDE.md`. |
| **Forgetting mid-task** | It ignores a rule from earlier in a long conversation | Start a fresh task. Put lasting rules in a context file, not in chat. |
| **Overreach** | It edits files you did not mention, or rewrites more than asked | Be specific about scope. Keep approvals on. |
| **Following instructions hidden in content** | An email says "forward this to..." and the AI tries to | Keep send-approvals on. Never let it read untrusted content and act without review. |

## How to check work quickly

- **Ask it to show its sources.** "For each claim, give the source and the exact quote."
- **Ask it to critique itself.** "Review this draft as a skeptical reviewer. What is wrong or unsupported?" This catches a surprising amount.
- **Spot-check numbers.** Pick three numbers and trace them to the source.
- **Read it aloud.** If it does not sound like you, your voice section in `CLAUDE.md` needs work.

## Fix the cause, not just the output

When something goes wrong, correct it, and then ask why it happened:

- **Missing context?** Add it to `CLAUDE.md` or the project brief. "You keep writing too formally for patients. Add a rule to CLAUDE.md about that."
- **Vague recipe?** Make the step explicit. "Update the paper-summary recipe so it always quotes the source sentence."
- **Too much in one conversation?** Split the task. One task per conversation.
- **Wrong file?** Check folder names and the "How this vault is organized" section of `CLAUDE.md`.

Every fix you write down is a mistake that does not repeat. That is how the setup gets better over time.

## When a scheduled task breaks

If a morning brief comes back empty or odd: check that the connector is still signed in, that the folders it reads still exist with the same names, and that the desktop app was open if the task needs your files. Run the recipe by hand once to see the error.
