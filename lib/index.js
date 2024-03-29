/**
*
*	VALIDATE: boolean-array
*
*
*	DESCRIPTION:
*		- Validates if a value is a boolean array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isBoolean = require( 'validate.io-boolean' );


// IS BOOLEAN ARRAY //

/**
* FUNCTION: isBooleanArray( value )
*	Validates if a value is a boolean array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a boolean array
*/
function isBooleanArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isBoolean( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isBooleanArray()


// EXPORTS //

module.exports = isBooleanArray;
