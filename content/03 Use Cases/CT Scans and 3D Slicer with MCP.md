---
title: CT Scans and 3D Slicer with MCP
status: published
tags: [use-cases, imaging, slicer, mcp]
date: 2026-10-02
description: "Connect an AI assistant to 3D Slicer for CT visualization, supervised segmentation, measurements, and teaching models. Includes a sample-data workflow and copyable prompts."
---
You have a CT scan and want to prepare teaching views, outline an anatomical region, or turn a reviewed segmentation into a 3D model. With an MCP connection, an AI assistant can help operate **3D Slicer**, while you inspect the images and decide whether the result is correct.

**Start with public sample data.** This is an advanced connection for research and education. Slicer states that it is not FDA approved; installing an AI bridge does not establish suitability for diagnosis or treatment. See [About 3D Slicer](https://slicer.readthedocs.io/en/latest/user_guide/about.html).

## What the connection adds

**Slicer** displays and processes medical images. **MCP** is the bridge that lets an assistant call tools in another application. **A skill or recipe** tells the assistant how to approach the work. A recipe alone does not connect it to Slicer.

The workflow is: **your request → AI assistant → MCP bridge → Slicer → results for your review**. The assistant may receive tool output or screenshots as part of that loop.

Two community implementations are available:

| Bridge | How it connects | Where to start |
|---|---|---|
| `zhaoyouj/mcp-slicer` | A separate MCP server uses Slicer's Web Server module | [Maintainer's setup guide](https://github.com/zhaoyouj/mcp-slicer) |
| `pieper/slicer-skill` MCP server | A Python server runs inside Slicer and exposes a local HTTP MCP endpoint | [Maintainer's setup guide](https://github.com/pieper/slicer-skill) |

Both provide scene inspection, Python execution, and screenshots. Choose one implementation and follow its current instructions; their setup steps are not interchangeable. The first project's maintainer explicitly describes it as a third-party integration and advises against production use.

## Useful physician workflows

These are proposed workflows to build and validate, not promises that a connector can perform every task correctly without supervision.

| Task | What to ask the assistant to prepare | What you review |
|---|---|---|
| CT orientation and teaching views | Arrange axial, coronal, sagittal, and 3D views of the selected volume | Correct series, side, orientation, and display settings |
| Sinus or skull-base teaching | Prepare views of a region you identify and propose a segmentation approach | Anatomical boundaries, artifacts, and whether the approach fits the scan |
| Segmentation | Create a draft region using appropriate Segment Editor tools | Overlay on the source images through all three planes, including difficult boundaries |
| Research measurements | Compute statistics for a reviewed segment and produce a table | Segment, source volume, units, and method |
| 3D teaching model | Export a reviewed segmentation as a surface model | Scale, orientation, missing thin structures, and changes introduced by smoothing |
| Repeated research workflow | Save the processing steps and parameters for another eligible scan | Whether the same assumptions and quality checks hold for each scan |

Slicer's [Segment Editor](https://slicer.readthedocs.io/en/5.8/user_guide/modules/segmenteditor.html) provides interactive segmentation tools. Its [segmentation guide](https://slicer.readthedocs.io/en/latest/user_guide/image_segmentation.html) covers representations and model workflows. An MCP bridge controls available tools; it does not itself supply a validated anatomy-specific segmentation model.

## Connect it in stages

1. **Open Slicer with public sample data.** The [Sample Data module](https://slicer.readthedocs.io/en/latest/user_guide/modules/sampledata.html) provides example datasets. Choose a CT sample and keep this session separate from patient work.
2. **Choose a bridge above.** Have a technical colleague help if configuring an MCP client or running a script inside Slicer is unfamiliar. Use the maintainer's documented prerequisites.
3. **Configure your AI client for that bridge.** Support and configuration differ by client. Do not assume a local Slicer server can be added as a cloud connector in Cowork. A cloud service cannot reach your computer's `localhost` directly.
4. **Verify the connection with a small request.** Use the prompt below before asking for edits.
5. **Keep the endpoint local and stop the bridge when finished.** Do not make a local server publicly reachable just to solve a connection problem.

```text
Use the connected Slicer tools to inspect the public sample scene.
List the loaded image volumes and their node IDs, dimensions, and voxel
spacing. Do not modify the scene. Tell me which tool returned the result.
If Slicer is not connected, say so instead of inventing a scene summary.
```

**Checkpoint:** compare the reported volumes with Slicer's Data module. A chat response claiming success is not sufficient evidence that the connection works.

## A first CT exercise

On the public sample, ask for a display change before attempting segmentation:

```text
Using the sample CT volume I select, show axial, coronal, sagittal, and
3D views. Preserve the source volume. Tell me what you changed and show
the result. Do not interpret findings or make a diagnosis.
```

For an anatomical region you can identify yourself:

```text
I want a teaching segmentation of [structure] from [selected volume ID].
First propose the method, required extensions, and likely limitations.
After I approve the method, create a new draft segmentation without
changing the original image. Show overlays in all three planes and stop
for my review before calculating measurements or exporting a model.
Do not assume a threshold or automatic model is suitable for this anatomy.
```

For sinus CT, define the target precisely: air-filled space, an anatomical cavity, and surrounding bone are different targets. Use this distinction to frame your request; do not let the assistant silently choose what the measurement represents.

After you have checked and corrected the segment:

```text
Run Segment Statistics for the segment I approved. Report the source
volume ID, segment name, measurement method, and units with each result.
Save a new results table and a processing note in the output folder I
specify. Do not overwrite previous files. Flag any unavailable measurement.
```

[Segment Statistics](https://slicer.readthedocs.io/en/latest/user_guide/modules/segmentstatistics.html) supports geometric and intensity measurements. Results depend on the selected representation and inputs; a smooth-looking model is not proof that its measurements are accurate.

## Keep enough context to repeat the work

Create a project folder with a short brief:

```text
Goal: [teaching illustration or research question]
Data: [public sample name or approved study code; source and permission]
Target: [exact structure and what counts as inside it]
Tools: [Slicer version, bridge version, relevant extensions]
Outputs: [new scene, segmentation, table, or model]
Review: [who checks boundaries, measurements, and exports]
Rules: preserve inputs; record parameters; do not diagnose; do not overwrite
```

Save the source reference, processing parameters, reviewed segmentation, and review notes alongside the result. For DICOM, import the dataset and select the intended series before loading it; a folder can contain multiple series. See the [Slicer DICOM guide](https://slicer.readthedocs.io/en/latest/user_guide/modules/dicom.html).

In the Four C's, the brief is **Context**, MCP is the **Connection**, the checked workflow is the **Capability**, and **Cadence** is a repeatable review process. Begin with supervised runs, rather than scheduling unattended image processing.

## Understand the data boundary

A local Slicer session does not mean the whole AI workflow stays local. The bridge may return screenshots, node names, file paths, metadata, or other data to a cloud model. The bridge can also execute code with the Slicer process's permissions. These limitations are documented in the [Slicer skill server's security warning](https://github.com/pieper/slicer-skill#security-warning).

For this tutorial, use public samples. Before any patient-specific work, get approval for the complete arrangement: data, workstation, bridge, AI provider, and outputs. Removing a name from a filename is not a de-identification process. See [[Patient Privacy and PHI]] and [[Keep a Human in the Loop]].

**Related:** [[C2 - Connections]] · [[Talks and Teaching]] · [[Ideas Devices and CAD]]

*Documentation checked 2 October 2026. These examples are documentation-based; this wiki update did not test a live Slicer connection or validate a clinical workflow.*
