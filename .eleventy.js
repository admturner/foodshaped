const { DateTime } = require('luxon');
const he = require('he');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');

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
	eleventyConfig.addFilter('htmlDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter('readableDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat('LLLL d, yyyy');
	});

	eleventyConfig.addFilter('markdown', (string) => {
		return mdIt.renderInline(string);
	});

	eleventyConfig.addFilter('decodeHtmlEntities', (string) => {
		return he.decode(string);
	});

	eleventyConfig.setLibrary('md', mdIt);

	eleventyConfig.addPassthroughCopy('src/_images');

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
