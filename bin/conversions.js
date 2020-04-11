'use strict';

/**
 * External dependencies.
 */
const toLower = require('lodash/toLower');
const math = require('mathjs');

/**
 * Volume equivalents
 *
 * cm^3 = 1 ml
 *
 * 1 teaspoon   = 4.929 milliliters
 * 1 tablespoon = 14.787 milliliters
 * 1 cup        = 236.588 milliliters
 */

 /**
 * Formulas
 *
 * 1 density = 1 mass (g) / 1 volume (ml)
 * mass (g) = volume (ml) * density (g/ml)
 *
 */

/**
 * Sample data
 *
 * {
 *   "name": "Butter",
 *   "type": "dairy",
 *   "volume": [
 *     { "measure": "cups", "amount": 1 },
 *     { "measure": "ml", "amount": 236.588 },
 *   "weight": { "measure": "grams", "amount": 226 }
 *   "densityGperMl": 0.911
 * }
 */

/**
 * Supported volume units.
 *
 * @see https://mathjs.org/docs/datatypes/units.html
 */
const volumes = [
	'm3',
	'liter',
	'l',
	'L',
	'milliliter',
	'ml',
	'cc',
	'teaspoon',
	'tablespoon',
	'cup',
	'cp',
	'pint',
	'pt',
	'quart',
	'qt',
	'gallon',
	'gal'
]

const masses = [
	'gram',
	'g',
	'ounce',
	'oz',
	'poundmass',
	'lbm',
	'lb',
	'lbs'
]

/**
 * Define and clarify our units
 *
 * math.js already has:
 *   teaspoon
 *   tablespoon
 *   liter
 *   ml
 */
math.createUnit( {
	each: {
		aliases: [ 'clove', 'cloves', 'large' ]
	},
	pounds: '1 lb',
} );

/**
 * toJSON returns an object in the format:
 *
 * {
 *   mathjs: 'Unit',
 *   value: number,
 *   unit: string,
 *   fixPrefix: boolean
 * }
 */
const parseIngredient = ( ingredient ) => {
	return math.unit(ingredient).toJSON();
}

const getUnitType = ( unit ) => {
	if ( volumes.includes( unit ) ) {
		return 'mass';
	} else if ( masses.includes( unit ) ) {
		return 'volume';
	}

	return unit;
}

const massToVolume = ( mass ) => {
	return mass.to( 'ml' );
}

const volumeToMass = ( volume ) => {
	return volume.to( 'g' );
}

const convertUnit = ( ingredient ) => {
	let type;

	let ingredientObj = parseIngredient( ingredient );

	// Singularize unit strings when amount is greater than 1.
	if ( 1 < ingredientObj.value ) {
		ingredientObj.unit = ingredientObj.unit.replace( /s$/, '');
	}

	type = getUnitType( ingredientObj.unit );

	if ( 'mass' === type ) {
		return massToVolume( math.fromJSON( ingredientObj ) );
	} else if ( 'volume' === type ) {
		return volumeToMass( ingredientObj.fromJSON() );
	} else {
		return ingredient;
	}
}

const formatUnit = ( ingredient ) => {
	let ingredientObj = parseIngredient( ingredient );

	return `${ingredientObj.value} ${ingredientObj.unit}`;
}

module.exports = {
	test: convertUnit,

	readableUnit: formatUnit,
}
