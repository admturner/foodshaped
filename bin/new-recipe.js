#!/usr/bin/env node

/**
 * External dependencies.
 */
const { DateTime } = require('luxon');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const he = require('he');
const kebabCase = require('lodash/kebabCase');
const startCase = require('lodash/startCase');
const toLower = require('lodash/toLower');

const now = DateTime.fromObject({zone: 'America/Los_Angeles'}).toFormat('yyyy-LL-dd');

const template = (title) => {
	return `---
title: "${startCase(title)}"
author: Adam Turner
date: ${now}
version: 1.0.0
description: ''
produces: ''
categories:
  -
regions:
  -
tags:
  -
ingredients:
  - type:
    amount:
    prep:
    extra:
instructions:
  - section: ''
    steps:
      -
goesWellWith:
  -
---
`;
};

const makeRecipe = (name) => {
	const filepath = `./src/recipes/${kebabCase(name)}.md`;
	const data = template(name);

	fs.writeFile(filepath, data, { flag: 'wx' }, (err) => {
		if (err) {
			console.error(chalk.red('Error creating new recipe:'), err.message);
			return;
		}
		console.log(chalk.green(`Created new recipe: "${startCase(name)}"`));
	});
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(chalk.blue('What is the recipe title? '), (title) => {
	if ( '' !== title ) {
		title = toLower(he.escape(title));
		makeRecipe(title);
	} else {
		console.error(chalk.red('Please enter a recipe title.'));
	}

	rl.close();
});
