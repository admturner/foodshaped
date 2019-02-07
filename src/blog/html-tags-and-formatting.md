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

# Header one

## Header two

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a title="The HTML Citation Element &lt;cite&gt; represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a> element.</blockquote>
<cite>multiple contributors</cite> - MDN HTML element reference - blockquote

## Tables

| Code Updates               | Emoji                                           |
|:---------------------------|:------------------------------------------------|
| Update styles and UI       | :art: `:art:`                                   |
| Introduce new features     | :sparkles: `:sparkles:`                         |
| Improve performance        | :zap: `:zap:`                                   |
| Perform database changes   | :card_file_box: `:card_file_box:`               |
| Write documentation        | :memo: `:memo:`                                 |
| Improve accessibility      | :wheelchair: `:wheelchair:`                     |
| I18n and localization      | :globe_with_meridians: `:globe_with_meridians:` |
| Update security            | :lock: `:lock:`                                 |
| Change analytics           | :chart_with_upwards_trend: `:chart_with_upwards_trend:` |
| Improve SEO                | :mag: `:mag:`                                   |
| Update code due to external changes | :alien: `:alien:`                      |
| Update code due to code review changes | :ok_hand: `:ok_hand:`               |
| Refactor code              | :recycle: `:recycle:`                           |
| Remove code or files       | :fire: `:fire:`                                 |
| Introduce breaking changes | :boom: `:boom:`                                 |

## Definition Lists

<dl>
<dt>Definition List Title</dt>
<dd>Definition list division.</dd>
<dt>Startup</dt>
<dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
<dt>#dowork</dt>
<dd>Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.</dd>
<dt>Do It Live</dt>
<dd>I'll let Bill O'Reilly will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>
</dl>

## Unordered Lists (Nested)

<ul>
<li>List item one
<ul>
<li>List item one
<ul>
<li>List item one</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ul>
</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ul>
</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ul>

## Ordered List (Nested)

<ol start="8">
<li>List item one -start at 8
<ol>
<li>List item one
<ol reversed="reversed">
<li>List item one -reversed attribute</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ol>
</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ol>
</li>
<li>List item two</li>
<li>List item three</li>
<li>List item four</li>
</ol>

## HTML Tags

These supported tags come from the WordPress.com code <a title="Code" href="https://en.support.wordpress.com/code/">FAQ</a>.

<strong>Address Tag</strong>

<address>1 Infinite Loop<br />Cupertino, CA 95014<br />United States</address>
<strong>Anchor Tag (aka. Link)</strong>

This is an example of a <a title="WordPress Foundation" href="https://wordpressfoundation.org/">link</a>.

<strong>Abbreviation Tag</strong>

The abbreviation <abbr title="Seriously">srsly</abbr> stands for "seriously".

<strong>Acronym Tag (<em>deprecated in HTML5</em>)</strong>

The acronym <acronym title="For The Win">ftw</acronym> stands for "for the win".

<strong>Big Tag</strong> (<em>deprecated in HTML5</em>)

These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.

<strong>Cite Tag</strong>

"Code is poetry." --<cite>Automattic</cite>

<strong>Code Tag</strong>

This tag styles blocks of code.<br /><code>.post-title {<br />
	margin: 0 0 5px;<br />
	font-weight: bold;<br />
	font-size: 38px;<br />
	line-height: 1.2;<br />
	and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;<br />
}</code><br />You will learn later on in these tests that word-wrap: break-word;will be your best friend.

<strong>Delete Tag</strong>

This tag will let you <del cite="deleted it">strike out text</del>, but this tag is <em>recommended</em> supported in HTML5 (use the <code>&lt;s&gt;</code> instead).

<strong>Emphasize Tag</strong>

The emphasize tag should <em>italicize</em> <i>text</i>.

<strong>Horizontal Rule Tag</strong>

<hr />
This sentence is following a <code>&lt;hr /&gt;</code> tag.

<strong>Insert Tag</strong>

This tag should denote <ins cite="inserted it">inserted</ins> text.

<strong>Keyboard Tag</strong>

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.

<strong>Preformatted Tag</strong>

This tag is for preserving whitespace as typed, such as in poetry or ASCII art.

## The Road Not Taken

<pre><cite>Robert Frost</cite>


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

<strong>Quote Tag</strong> for short, inline quotes

<q>Developers, developers, developers...</q> --Steve Ballmer

<strong>Strike Tag</strong> (<em>deprecated in HTML5</em>) and <strong>S Tag</strong>

This tag shows <span style="text-decoration: line-through;">strike-through</span> <s>text</s>.

<strong>Small Tag</strong>

This tag shows <small>smaller<small> text.</small></small>

<strong>Strong Tag</strong>

This tag shows <strong>bold<strong> text.</strong></strong>

<strong>Subscript Tag</strong>

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

<strong>Superscript Tag</strong>

Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which should lift the 2 up.

<strong>Teletype Tag </strong>(<em>obsolete in HTML5</em>)

This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the <code>&lt;code&gt;</code> tag.

<strong>Underline Tag</strong> <em>deprecated in HTML 4, re-introduced in HTML5 with other semantics</em>

This tag shows <u>underlined text</u>.

<strong>Variable Tag</strong>

This allows you to denote <var>variables</var>.
