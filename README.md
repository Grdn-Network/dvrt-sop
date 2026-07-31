# DVRT SOP Reference

The GRDN OPS / DVMP Operations Standard Operating Procedure, published as a static site on GitHub Pages. Content is plain Markdown so staff can edit it without touching code.

## How to edit the SOP

Every Part of the SOP is one Markdown file in the [`_sop/`](_sop) folder, for example `01-before-you-join.md`. To change wording, just edit the text in that file and save. GitHub rebuilds the site automatically (about a minute), and the change goes live.

Editing options:
1. On github.com, open the file, click the pencil icon, edit, then "Commit changes".
2. Or edit locally and push.

### The top of each file

Each file starts with a small settings block between `---` lines:

```
---
part: "03"          # controls order in the sidebar (use 01, 02, 03, ...)
num: "3"            # the number shown in the sidebar and header
title: "Mandatory Procedures"
tag: "Compliance Required"
meta: "All personnel"
---
```

Everything below the second `---` is the Part's body, written in normal Markdown.

### Adding a new Part

Copy an existing file in `_sop/`, rename it (for example `09-safety.md`), update the settings block, and write the body. It appears in the sidebar automatically, ordered by `part`.

### Writing the body

- `## 3.1 Heading` makes a numbered sub-heading.
- Normal paragraphs are just text.
- `- item` makes a bullet list; indent two spaces for a sub-bullet.
- Standard Markdown tables work.
- Call-outs use a blockquote followed by a class:

```
> "Radio check, over."
{: .example}

> **NOTICE** Framework only, published for future implementation.
{: .danger}
```

## Layout / design

- `_layouts/manual.html` is the page shell (sidebar, header, search).
- `assets/style.css` is the field-manual theme.
- `assets/manual.js` handles search and sidebar highlighting.
- `_config.yml` holds the version and "last updated" values shown in the sidebar.

Content and design are separate on purpose: staff edit `_sop/`, and the look is maintained in the layout and CSS.
