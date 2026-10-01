---
title: Install Obsidian
status: published
tags: [getting-started, obsidian, setup]
date: 2026-10-01
---
About 15 minutes. At the end you will have a notes folder (Obsidian calls it a **vault**) that both you and Claude can work in.

## Step 1: Download and install

1. Go to [obsidian.md](https://obsidian.md) and download the app for your computer (Mac or Windows).
2. Install it like any other app. Obsidian is free, including for work use.

## Step 2: Create your vault

1. Open Obsidian and choose **Create new vault**.
2. Name it something simple, like `Second Brain` or `Work Notes`.
3. Choose where it lives. Pick a normal folder you can find, for example inside `Documents`.

> [!tip] Where should the vault live?
> A synced folder (Dropbox, iCloud, OneDrive) gives you a backup and lets you open notes on your phone. Check your institution's policy first: some do not allow work material in personal cloud storage. Never keep patient information in a personal vault.

## Step 3: Four settings worth changing

Using the [[Starter Kit]]? These are already set; skip to Step 4. Otherwise, open **Settings** (the gear icon, bottom left) and change these:

1. **Files and links → Default location for new notes:** set to `00 Inbox` (you will create this folder in [[Set Up Your Workspace in One Sitting]]). New notes land there until you file them.
2. **Files and links → Automatically update internal links:** turn on. Renaming a note will fix every link to it.
3. **Core plugins → Daily notes:** turn on. One note per day is a great place to dump thoughts for the AI to sort later.
4. **Core plugins → Templates:** turn on, and set the template folder to `Templates`.

You do not need any community plugins to follow this wiki.

## Step 4: Learn the three things you will use every day

- **Markdown basics.** A `#` at the start of a line makes a heading. A `-` makes a bullet. `**bold**` makes **bold**. That is 90 percent of it. See the [[Glossary]] for more.
- **Links.** Type `[[` and the name of another note to link them. Links are how both you and the AI see how ideas connect.
- **Properties.** The block between `---` lines at the top of a note holds details like `status:` and `tags:`. Claude can read and update these, which lets it sort and track your notes.

Example of a note with properties:

```markdown
---
status: active
tags: [project, research]
---
Retrospective review of outcomes after endoscopic sinus surgery.
Next step: finalize the data dictionary with the fellow.
```

## Step 5: Write one note

Make a note called `Test` and write a sentence. Close Obsidian and look in the vault folder on your computer: you will see `Test.md`, a plain text file. That is the whole secret. Your notes are just files, which is why AI can read them so easily.

## Next

[[Set Up Claude]] and point it at this vault.
