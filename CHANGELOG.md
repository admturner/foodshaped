# Changelog

This document details all notable changes to the Food Shaped website. It uses [Semantic Versioning](http://semver.org/).

<!--
## Major.MinorAddorDeprec.Bugfix (YYYY-MM-DD)

### Features
### Enhancements
### Bug Fixes
### Experiments
### Deprecations
### Code quality
### Documentation
### Build Tooling
### Project Management
-->

## 0.2.1 (2020-04-11)

### Changed

- :arrow_up: @11ty/eleventy => 0.10.0
- :arrow_up: @11ty/eleventy-plugin-rss => 1.0.7
- :arrow_up: @11ty/eleventy-plugin-syntaxhighlight => 3.0.1
- :arrow_up: luxon => 1.23.0
- :arrow_up: markdown-it => 10.0.0
- :arrow_up: markdown-it-attrs => 3.0.2
- :arrow_up: markdownlint-cli => 0.22.0
- :arrow_up: postcss-cli => 7.1.0
- :arrow_up: rimraf => 3.0.2
- :arrow_up: stylelint => 13.3.2
- :arrow_up: stylelint-config-recommended => 3.0.0

## 0.2.0 (2019-04-13)

### Added

- :bread: Recipe for bagels.
- :rice: Recipe for ginger brown rice.
- :bread: Recipe for soda bread.
- :curry: Recipe for ye’abesha gomen.
- Recipes directory data file.

## 0.1.0 (2019-04-11)

### Added

- Template to render a recipe in JSON-LD format using head matter data (in `<head>` section of layouts with the 'jsonld' flag set to true).
- Script to generate new recipes with the recipe YAML head matter.
- Paired shortcode to wrap aside content in a parent element and include optional class(es).
- Shortcodes to format YAML header data with ingredients and instructions into HTML for display.
- Create recipes collection.
- Global site data file to store data such as production vs. development base URL, site title, author, and feed data.
- Add Eleventy RSS plugin and template with posts collection.
- :heavy_plus_sign: Add npm-run-all dev dependency and update build scripts.
- :warning: Add stylelint rules and fix errors.
- Add version to css link for cache busting.
- Add syntax highlighting and PostCSS import tool.
- Set up markdown linting.
- Set up html minifier.
- Create initial placeholder post content.
- Add home page and landing pages for posts and recipes.
- Create initial base template and layouts for home, pages, posts, and recipes.
- Create initial placeholder stylesheet.
- :card_file_box: Create site and blog data files
- :wrench: Set up CSS build processors and configuration.
- :wrench: Set up environment configuration files for NPM and Eleventy.
- Initial readme, licensing, and ignore files.
