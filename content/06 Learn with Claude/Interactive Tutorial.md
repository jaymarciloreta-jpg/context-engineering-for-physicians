---
title: Interactive Tutorial
status: published
tags: [tutorial, skills, getting-started]
date: 2026-10-01
---
Instead of reading the whole wiki, let Claude teach you. The **Physician Context Coach** is a skill (a plain-text instruction file) that turns Claude into a patient tutor. It interviews you, builds your setup with you, and saves real files in your vault at each step. It remembers where you stopped, so you can do one module a day.

## What you will build

The coach teaches the same nine lessons as the self-guided [[00 Tutorial/index|Tutorial]], from installing the tools to a task running on a schedule. About 2 hours in total. Claude shares each lesson page with you as you go, so you can always read ahead or look back.

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
and follow them exactly, starting at Lesson 1. Keep messages short and
wait for me after each step. Never use real patient information.
```

## Safety built in

The coach is instructed to refuse patient information, never send or delete anything without your approval, move rather than delete files, and remind you to check every clinical statement. It will also tell you plainly not to connect clinical systems unless your institution has approved them. See [[Patient Privacy and PHI]].

## Want to read instead?

Follow the self-guided [[00 Tutorial/index|Tutorial]], one lesson at a time. Each lesson has a "Do it with Claude" prompt you can paste if you get stuck.
