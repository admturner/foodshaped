# Changelog: Eternal Pastry

Author: Adam Turner  
URI: https://github.com/admturner/eternalpastry/

This document details all notable changes to the Eternal Pastry website. It uses [Semantic Versioning](http://semver.org/).

<!--
## Major.MinorAddorDeprec.Bugfix (YYYY-MM-DD)

### Todo (for upcoming changes)
### Security (in case of fixed vulnerabilities)
### Fixed (for any bug fixes)
### Changed (for changes in existing functionality)
### Added (for new features)
### Deprecated (for once-stable features removed in upcoming releases)
### Removed (for deprecated features removed in this release)
-->

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
