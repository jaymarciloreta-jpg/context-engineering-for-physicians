---
title: Interactive Tutorial
status: published
tags: [tutorial, skills, getting-started]
date: 2026-10-01
---
Instead of reading the whole wiki, let Claude teach you. The **Physician Context Coach** is a skill (a plain-text instruction file) that turns Claude into a patient tutor. It interviews you, builds your setup with you, and saves real files in your vault at each step. It remembers where you stopped, so you can do one module a day.

## What you will build

| Module | Time | You end up with |
|---|---|---|
| 0. Orientation | 3 min | A clear picture of the Four C's for your week |
| 1. First win | 15 min | A finished piece of work and your first recipe |
| 2. Organize the vault | 10 min | The PARA folders |
| 3. A real CLAUDE.md | 15 min | Your full about-me file |
| 4. First project | 15 min | A project folder with a working brief |
| 5. Recipes | 10 min | One or two recipes tailored to you |
| 6. Connections | 10 min | Your first connector (calendar), safely |
| 7. Cadence | 5 min | A scheduled morning brief or weekly digest |
| 8. Wrap up | 3 min | A one-week plan to make it stick |

## Option A: Install the skill (recommended)

1. Download [physician-context-coach.zip](https://jaymarciloreta-jpg.github.io/context-engineering-for-physicians/files/physician-context-coach.zip). Do not unzip it.
2. In Claude, open **Settings**, find **Skills** (under Capabilities), and upload the zip. Make sure skills are turned on. Anthropic's help page: [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
3. In the Claude desktop app, start a new task and choose your notes folder (or the [[Starter Kit]] folder, or a new empty folder called `Second Brain`).
4. Type: **start the tutorial**.

To pick up later, open a task on the same folder and type **continue the tutorial**. Progress is saved in a file called `tutorial-progress.md`.

## Option B: No install, just paste

If you cannot install skills, open a task on your folder and paste this:

```text
Please act as my tutor for setting up context engineering as a physician.
Read the tutorial instructions at
https://github.com/jaymarciloreta-jpg/context-engineering-for-physicians/blob/main/kits/physician-context-coach/SKILL.md
and follow them exactly, starting at Module 0. Keep messages short and
wait for me after each step. Never use real patient information.
```

## Safety built in

The coach is instructed to refuse patient information, never send or delete anything without your approval, move rather than delete files, and remind you to check every clinical statement. It will also tell you plainly not to connect clinical systems unless your institution has approved them. See [[Patient Privacy and PHI]].

## Want to read instead?

Everything the tutorial teaches is on this site, starting at [[index|Start Here]].
