'use strict';
// ('1234fnb') => '###4fnb'
let maskify = (cc) =>
	cc
	.split('')
	.reduce((total, curr, currentIndex, arr) => 
		currentIndex < (arr.length-4) ? total + '#': total + arr[currentIndex], '')

 console.log(maskify('123a45'))//##3a45