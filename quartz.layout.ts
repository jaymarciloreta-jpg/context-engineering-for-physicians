import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Start Here": "https://jaymarciloreta-jpg.github.io/context-engineering-for-physicians/",
      "Interactive Tutorial": "https://jaymarciloreta-jpg.github.io/context-engineering-for-physicians/06-Learn-with-Claude/Interactive-Tutorial",
      GitHub: "https://github.com/jaymarciloreta-jpg/context-engineering-for-physicians",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Contents",
      folderDefaultState: "open",
      sortFn: (a, b) => {
        const order = [
          "Your 20-Minute First Win","Your AI Toolkit","Install Obsidian","Set Up Claude","Set Up Your Workspace in One Sitting",
          "C1 - Context","C2 - Connections","C3 - Capabilities","C4 - Cadence",
          "Research and Literature","Projects and Papers","Administration and Email","Talks and Teaching","Ideas Devices and CAD",
          "Templates","Recipe Library","Scheduled Recipes",
          "Patient Privacy and PHI","Keep a Human in the Loop","When AI Gets It Wrong",
          "Interactive Tutorial","Starter Kit",
          "How I Use This","Glossary","FAQ","Sources and Further Reading",
        ]
        if (a.isFolder && b.isFolder) return a.slugSegment.localeCompare(b.slugSegment)
        if (a.isFolder !== b.isFolder) return a.isFolder ? 1 : -1
        const ia = order.indexOf(a.displayName), ib = order.indexOf(b.displayName)
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.displayName.localeCompare(b.displayName)
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "Contents",
      folderDefaultState: "open",
      sortFn: (a, b) => {
        const order = [
          "Your 20-Minute First Win","Your AI Toolkit","Install Obsidian","Set Up Claude","Set Up Your Workspace in One Sitting",
          "C1 - Context","C2 - Connections","C3 - Capabilities","C4 - Cadence",
          "Research and Literature","Projects and Papers","Administration and Email","Talks and Teaching","Ideas Devices and CAD",
          "Templates","Recipe Library","Scheduled Recipes",
          "Patient Privacy and PHI","Keep a Human in the Loop","When AI Gets It Wrong",
          "Interactive Tutorial","Starter Kit",
          "How I Use This","Glossary","FAQ","Sources and Further Reading",
        ]
        if (a.isFolder && b.isFolder) return a.slugSegment.localeCompare(b.slugSegment)
        if (a.isFolder !== b.isFolder) return a.isFolder ? 1 : -1
        const ia = order.indexOf(a.displayName), ib = order.indexOf(b.displayName)
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.displayName.localeCompare(b.displayName)
      },
    }),
  ],
  right: [],
}
