# Context Engineering for Physicians

A free, plain-language wiki that teaches physicians to move beyond one-off AI prompting: organize your knowledge in Obsidian, give AI reusable context with CLAUDE.md files, connect it safely to your tools, save reusable recipes, and run them on a schedule.

**Live site:** https://jaymarciloreta-jpg.github.io/context-engineering-for-physicians/

Built by Dr. Alfred-Marc (Jaymarc) Iloreta, MD.

## What is in this repository

| Folder | What it is |
|---|---|
| `content/` | The wiki pages (Obsidian markdown). Edit these to change the site. |
| `starter-vault/` | A ready-made Obsidian vault for physicians: PARA folders, CLAUDE.md template, 13 recipes. |
| `kits/physician-context-coach/` | A Claude skill that runs an interactive, step-by-step setup tutorial. |
| `content/files/` | Downloadable zips of the starter vault and the tutorial skill. |
| `quartz/`, `quartz.*.ts` | [Quartz](https://quartz.jzhao.xyz) v4, the static site generator. |

## Updating the site

Edit or add markdown files in `content/` and push to `main`. GitHub Actions rebuilds and publishes the site automatically.

Preview locally:

    npm ci
    npx quartz build --serve

## Safety

Nothing on this site should ever include identifiable patient information. See `content/05 Safety/Patient Privacy and PHI.md`.

## License

Wiki content: CC BY 4.0. Quartz: MIT (see `LICENSE.txt`).
