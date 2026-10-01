---
title: Set Up Claude
status: published
tags: [getting-started, claude, setup]
date: 2026-10-01
---
About 20 minutes. At the end, Claude will be able to read and write in your Obsidian vault, and you will know where connectors, skills, and scheduled tasks live.

## Step 1: Get the right plan

Working in a folder, connectors, skills, and scheduled tasks need a paid Claude plan: Pro, Max, Team, or Enterprise. If your institution offers an approved Claude plan, use that one for work, and ask what it is approved for.

## Step 2: Install the desktop app

1. Download the Claude desktop app from [claude.ai/download](https://claude.ai/download).
2. Sign in.

The desktop app matters because it is the version that can open a folder on your computer. Claude can only reach your files while the desktop app is open.

## Step 3: Point Claude at your vault

1. Start a new task in the desktop app.
2. Choose your Obsidian vault folder as the folder Claude can work in.
3. Ask something simple to confirm it works:

```text
List the folders in my vault and tell me what you think each one is for.
```

Claude only sees the folders you give it. Start with your vault, nothing else.

> [!tip] Claude reads CLAUDE.md automatically
> When Claude opens a folder, it looks for a file named `CLAUDE.md` and reads it before doing anything. That is why your "about me" file goes there. You will write it in [[Set Up Your Workspace in One Sitting]].

## Step 4: Know where the other pieces live

You do not have to set these up today. Just know they exist:

- **Connectors** link Claude to your email, calendar, cloud drive, reference tools, and more. Find them in the Connectors section of Claude's settings, or ask Claude "what connectors are available?" See [[C2 - Connections]].
- **Skills** are saved recipes, written in plain language. You can upload them in settings, or keep them as markdown files in your vault and say "use the recipe in skills/weekly-plan.md." See [[C3 - Capabilities]].
- **Scheduled tasks** run a recipe on a timer, like a 6 am brief. Just ask Claude: "Run this every weekday at 6 am." See [[C4 - Cadence]].

## Step 5: Choose how much Claude can do on its own

Claude asks before it takes actions like sending email or editing files outside the task. Leave those approvals on at first. Turn them down only for specific, low-stakes tasks you have watched work reliably. See [[Keep a Human in the Loop]].

## Safety basics for this step

- Give Claude only the folders it needs.
- Do not connect anything that holds patient information unless your institution has approved that exact setup. See [[Patient Privacy and PHI]].
- You are responsible for what Claude does on your behalf, the same as with a human assistant.

Anthropic's own guide is worth five minutes: [Use Claude Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely).

## Next

[[Set Up Your Workspace in One Sitting]].
