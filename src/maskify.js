'use strict';
// ('1234fnb') => '###4fnb'
function maskify(cc) {
	return cc
	.split('')
	.reduce((total, curr, currentIndex, arr) => 
		currentIndex < (arr.length-4) ? total + '#': total + arr[currentIndex], '')
} 

console.log(maskify('123a45'))//##3a45