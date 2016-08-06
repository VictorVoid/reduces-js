'use strict';
//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
function isIsogram(str){
	return !str
		.toLowerCase()
		.split('')
		.reduce((prev, curr, i, array) => array
			.slice(array.indexOf(curr)+1)
			.includes(curr) ? prev + 1: prev + 0, 0) > 0
}
console.log(isIsogram('')); //true
console.log(isIsogram('aspol')); //true
console.log(isIsogram('asspol')); //false