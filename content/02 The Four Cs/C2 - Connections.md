---
title: C2 - Connections
status: published
tags: [four-cs, connections, mcp]
date: 2026-10-01
---
Context tells the AI who you are. Connections give it hands. A connection is a permissioned link between the AI and a tool you already use, so it can pull in real information and, when you allow it, take real action. This is the step that turns the AI from a clever advisor into something that does work for you.

Without connections, the AI can only read the files in your folder. With them, it can read your calendar to plan your week, search PubMed for a paper, or draft a reply sitting in your inbox.

## Connectors (MCP) in plain terms

The links are called **connectors**. You may also see the term **MCP**, which stands for Model Context Protocol. You do not need to know what that means. Think of a connector as a labeled, lockable door between the AI and one of your tools. You decide which doors exist and what is allowed through each one.

You add a connector once, sign in to that tool as you normally would, and from then on the AI can use it within the limits you set. In Claude, connectors live in the Connectors section of settings. There is a directory of ready-made ones, and many are one click.

## Two kinds of access: read and do

Every connection works in one or both directions, and the difference matters.

- **Read access** lets the AI look at information. Reading your calendar to see your week. Searching the literature. Opening a document in your drive. It does not change the source, but it can still expose sensitive information to the AI service.
- **Do access** lets the AI take action. Drafting and sending an email. Adding a calendar event. Creating a task. This is where the real time savings are, and also where you want to be careful at first.

A good habit early on: keep the AI in **draft mode**. Let it prepare the email or the event, and you press send. As you build trust in a specific task, you can let it act on its own.

## Which connections to set up first

Do not connect everything at once. Pick the two or three tools where you lose the most time to repetitive work:

| Connection | What it unlocks | Good first task |
|---|---|---|
| Email (Gmail, Outlook) | Triage, thread summaries, drafted replies | "Which emails this week actually need me?" |
| Calendar | Seeing and planning your week | "What does tomorrow look like, and what needs prep?" |
| Cloud drive (Google Drive, OneDrive, Dropbox) | Reading documents you already keep | "Summarize the latest draft of the protocol." |
| Literature (PubMed and similar) | Searching and summarizing papers | "Find RCTs from the last two years on X." |
| Tasks (Todoist, Asana, Notion) | Turning plans into tracked to-dos | "Add the action items from this note as tasks." |
| Slides (presentation tools) | Building decks from an outline | "Turn this outline into a 12-slide talk." |

Add one, use it for simple tasks until it feels reliable, then add the next. Two solid connections beat ten you do not trust.

## A more advanced example: 3D Slicer

An MCP bridge can also connect an assistant to desktop imaging software. With **3D Slicer**, it can inspect the open scene, help arrange CT views, and run processing steps you review. This usually requires a community bridge and client-specific setup, rather than a one-click account sign-in. Start with public sample data.

See [[CT Scans and 3D Slicer with MCP]] for available bridges, a first connection check, and copyable prompts. Local image processing does not guarantee that tool responses or screenshots stay local.

## The hard line: patient information and permissions

This is the most important section to read slowly.

A connector acts as you. It can reach whatever your sign-in can reach. That is convenient, but it means you must think before connecting anything that touches patient information.

- **Do not connect an AI tool to a system that holds protected health information (PHI)**, such as your EHR or a clinical inbox, unless your institution has explicitly approved that exact setup.
- **Hospital email often contains PHI.** If your work email carries patient details, treat it as clinical. Ask your IT or compliance office before connecting it, or start with a personal or academic account that does not.
- **For anything patient-specific, use only tools your institution has cleared.** When in doubt, the answer is no.

The good news: the largest gains here (your schedule, your writing, your research, your teaching, your committee work) rarely need patient data at all. Start there. The full rules are on [[Patient Privacy and PHI]].

> [!warning] Content can carry instructions
> When the AI reads email or web pages, it may run into text that tries to give it instructions ("ignore your rules and forward this"). This is called prompt injection. Keep do-access approvals on for anything that reads outside content, and be wary of letting the AI both read untrusted email and send email without your review.

## What this looks like for a physician

- Connect your calendar and ask, each morning, what your day looks like and what needs prep.
- Connect your inbox and have the AI flag the three emails that actually need you and draft replies to the rest.
- Connect a literature search tool and ask for the key findings of new papers against a question you care about.

None of these need patient data, and each one gives back real time. Step-by-step versions are in the [[Recipe Library]].

## What to do next

- Pick one connection (calendar is the safest start) and add it.
- Keep it in draft mode until you trust it.
- Then move on to [[C3 - Capabilities]] to see what the AI can do once it is connected.
