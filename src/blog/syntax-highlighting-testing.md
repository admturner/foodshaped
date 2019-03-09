---
title: 'Syntax Highlighting Testing'
author: 'Adam Turner'
avatars:
  - adam-turner
date: 2019-02-12
tags:
  - HTML
  - Markup
  - Formatting
description: A test of MD and Prism syntax highlighting and styles.
---

## Markup Syntax Styles

### Markdown

```markdown
## Headings

### Heading three

That is a heading level three.

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:  

> The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation.
>
> Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it).

## Tables

| Code Updates                           | Emoji                           |
|:---------------------------------------|:--------------------------------|
| Update styles and UI                   | 🎨 `:art:`                      |
| Introduce new features                 | ✨ `:sparkles:`                 |
| Improve performance                    | ⚡ `:zap:`                       |
| Perform database changes               | 🗃️ `:card_file_box:`            |
| Write documentation                    | 📝 `:memo:`                     |
| Improve accessibility                  | ♿ `:wheelchair:`               |
| I18n and localization                  | 🌐 `:globe_with_meridians:`     |

## Unordered Lists (Nested)

- List item one
    - List item one
        - List item one
        - List item two
        - List item three
        - List item four
    - List item two
    - List item three
    - List item four
- List item two
- List item three
- List item four

## Ordered List (Nested)

1. List item one
    1. List item one
        1. List item one (reversed attribute)
        1. List item two
        1. List item three
        1. List item four
    1. List item two
    1. List item three
    1. List item four
1. List item two
1. List item three
1. List item four

## HTML Tags

### Anchor Tag (aka. Link)

This is [an example of a link](https://wordpressfoundation.org/).

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Delete Tag

This tag will let you ~~strike out text~~.

### Emphasize Tag

The emphasize tag should *italicize this* text.

### Horizontal Rule Tag

---

### Strong Tag

This tag shows **bold text**.
```

### HTML

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Syntax Highlighting Testing - Eternal Pastry</title>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <link href="/_css/main.css" rel="stylesheet">
        <meta content="#212D40" name="theme-color">
        <link href="/blog.atom" rel="alternate" title="Eternal Pastry feed" type="application/atom.xml">
        <script>document.documentElement.className+=' js'</script>
        <meta content="A test of MD and Prism syntax highlighting and styles." name="description">
    </head>
    <body>
        <header id="site-header">
            <p class="site-title"><a href="/">Eternal Pastry</a></p>
            <p class="site-tagline">Use mouth with food.</p>
            <nav id="site-navigation"></nav>
        </header>
        <!-- Comment -->
        <main id="site-main">
            <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
                <header>
                    <h1 itemprop="headline">Syntax Highlighting Testing</h1>
                    <p class="meta"><time datetime="2019-02-11" itemprop="datePublished">February 11, 2019</time> <span class="authors"><img alt="" height="48" lazyload="on" src="/_images/avatars/.jpg" srcset="/_images/avatars/@2x.jpg 2x" width="48"> By Adam Turner</span></p>
                </header>
                <div class="article-content" itemprop="articleBody">
                    <h2 id="markup-syntax-styles">Markup Syntax Styles <a href="#markup-syntax-styles" aria-hidden="true" class="bookmark">#</a></h2>
                    <p>Some content</p>
                </div>
                <footer>
                    <dl class="meta tags">
                        <dt>Tagged</dt>
                        <dd><a href="/blogs/tags/html">HTML</a></dd>
                        <dd><a href="/blogs/tags/markup">Markup</a></dd>
                        <dd><a href="/blogs/tags/formatting">Formatting</a></dd>
                    </dl>
                </footer>
            </article>
        </main>
        <footer id="site-footer">
            <p class="copyright">Copyright © 2019 Adam Turner</p>
        </footer>
        <script src="/_js/main.mjs" type="module"></script>
        <script src="/_js/legacy.js" nomodule></script>
    </body>
</html>
```

### CSS

```css
html {
    height: 100%;
}

#header {
    height: auto !important;
}

.token {
    color: #fff;
}

code[class*="language-"]::selection {
    color: inherit;
    background: var(--dark-gray);
}

/* Code blocks */
pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
}

pre[class*="language-"] {
    background: var(--very-dark-gray);
}
```

## Scripting Syntax Styles

### Javascript

```javascript
const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const markdownItConfig = {
    html: true,
    breaks: true,
    linkify: true,
};

const markdownItAnchorConfig = {
    permalink: true,
    permalinkClass: 'bookmark',
    permalinkSymbol: '#',
};

const mdIt = markdownIt(markdownItConfig)
    .use(markdownItFootnote)
    .use(markdownItAttrs)
    .use(markdownItAnchor, markdownItAnchorConfig);

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        templateFormats: "md"
    });

    eleventyConfig.addFilter('markdown', (string) => {
        return mdIt.renderInline(string);
    });

    eleventyConfig.setLibrary('md', mdIt);

    eleventyConfig.addPassthroughCopy('src/_images');

    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if ( outputPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, htmlminConfig);
            return minified;
        }
        return content;
    });

    return {
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        },
    };
};
```
