---
title: 'HTML Tags and Formatting'
author: 'WP Theme Test ([Theme Test](https://codex.wordpress.org/Theme_Unit_Test))'
avatars:
  - adam-turner
date: 2019-02-05
tags:
  - HTML
  - Markup
  - Formatting
description: A variety of standard HTML tags.
---

## Headings

# Heading one

## Heading two

### Heading three

#### Heading four

##### Heading five

###### Heading six

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:  

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a title="The HTML Citation Element &lt;cite&gt; represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a> element.</blockquote>
<cite>multiple contributors</cite> - MDN HTML element reference - blockquote

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
| Update security                        | 🔒 `:lock:`                     |
| Change analytics or tracking code      | 📈 `:chart_with_upwards_trend:` |
| Improve SEO                            | 🔍 `:mag:`                      |
| Update code due to external changes    | 👽 `:alien:`                    |
| Update code due to code review changes | 👌 `:ok_hand:`                  |
| Refactor code                          | ♻️ `:recycle:`                  |
| Remove code or files                   | 🔥 `:fire:`                     |
| Introduce breaking changes             | 💥 `:boom:`                     |

## Definition Lists

<dl>
    <dt>Definition List Title</dt>
    <dd>Definition list division.</dd>
</dl>

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

These supported tags come from the WordPress.com code [FAQ](https://en.support.wordpress.com/code/).

### Address Tag

<address>1 Infinite Loop  
Cupertino, CA 95014  
United States</address>

### Anchor Tag (aka. Link)

This is an <a href="https://wordpressfoundation.org/">example of a link</a>.

### Abbreviation Tag

The abbreviation <abbr title="Seriously">srsly</abbr> stands for "seriously".

### Cite Tag

"Code is poetry." --<cite>Automattic</cite>

### Code Tag

This tag styles blocks of code.

```css
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;

  /* and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows */
}
```

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Delete Tag

This ~~tag will let~~ you <del cite="deleted it">strike out text</del>, but this tag is <em>recommended</em> supported in HTML5 (use the `<s>` instead).

### Emphasize Tag

The emphasize tag should *italicize this* text.

### Horizontal Rule Tag

---

This sentence is following a `<hr>` tag.

### Insert Tag

This tag should denote <ins cite="inserted it">inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag is for preserving whitespace as typed, such as in poetry or ASCII art.

**The Road Not Taken**

<pre>
  <cite>Robert Frost</cite>

  Two roads diverged in a yellow wood,
  And sorry I could not travel both
  And be one traveler, long I stood
  And looked down one as far as I could
  To where it bent in the undergrowth;

  Then took the other, as just as fair,
  And having perhaps the better claim,
  Because it was grassy and wanted wear;
  Though as for that the passing there
  Had worn them really about the same,

  And both that morning equally lay
  In leaves no step had trodden black.
  Oh, I kept the first for another day!
  Yet knowing how way leads on to way,
  I doubted if I should ever come back.

  I shall be telling this with a sigh
  Somewhere ages and ages hence:
  Two roads diverged in a wood, and I—
  I took the one less traveled by,
  And that has made all the difference.

  and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;
</pre>

### Quote Tag for short, inline quotes

<q>Developers, developers, developers...</q> --Steve Ballmer

### Small Tag

This tag shows <small>smaller</small> text.

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which should lift the 2 up.

### Underline Tag (*deprecated in HTML 4, re-introduced in HTML5 with other semantics*)

This tag shows <u>underlined text</u>.

### Variable Tag

This allows you to denote <var>variables</var>.
