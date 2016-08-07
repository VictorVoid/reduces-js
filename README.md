# Reduces Js
Understand Javascript Array Reduce with examples everywhere.

# When to use Reduce ? 

You may use reduce when to want to find a cumulative or concatenated value based on elements across the array, 
and a cumulative value can to be one way to solve many problems.

## Examples

1.

```js
/*It should remove all values from list a, which are present in list b.
difference([1,2],[1]) == [2] difference([1,2,2,2,3],[2]) == [1,3] */
let array_diff = (a, b) => a.reduce((prev, curr) => (!b.includes(curr) && prev.push(curr), prev), [])
```

2.
```js
/* Returns the sum of all the multiples of 3 or 5 below the number passed in.
10 => 23, 5 => 3*/
let multiplebelow = (number) =>
	 number <= 0 ? 0 :
	 Array.from(new Array(number-1), (x, i) => i + 1)
	.reduce((prev, curr) => (curr % 3 == 0 || curr % 5 == 0) ? prev + curr: prev ,0)

```

3.
```js
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive.
aspol => true, asspol => false*/
let isIsogram = (str) =>
	!str
	.toLowerCase()
	.split('')
	.reduce((prev, curr, i, array) => array
		.slice(array.indexOf(curr)+1)
		.includes(curr) ? prev + 1: prev + 0, 0) > 0
```

4.
```js
// ('1234fnb') => '###4fnb'
let maskify = (cc) =>
	cc
	.split('')
	.reduce((total, curr, currentIndex, arr) => 
		currentIndex < (arr.length-4) ? total + '#': total + arr[currentIndex], '')
```
