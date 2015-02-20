'use strict';

var isBooleanArray = require( './../lib' );

console.log( isBooleanArray( [true,false,true] ) );
// returns true

console.log( isBooleanArray( [] ) );
// returns false

console.log( isBooleanArray( [true,1,false] ) );
// returns false
