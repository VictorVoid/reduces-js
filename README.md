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
let multiplebelow = number =>
	 number <= 0 ? 0 :
	 Array.from(new Array(number-1), (x, i) => i + 1)
	.reduce((prev, curr) => (curr % 3 == 0 || curr % 5 == 0) ? prev + curr: prev ,0)

```

3.
```js
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive.
aspol => true, asspol => false*/
let isIsogram = str =>
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
let maskify = cc =>
	cc
	.split('')
	.reduce((total, curr, currentIndex, arr) => 
		currentIndex < (arr.length-4) ? total + '#': total + arr[currentIndex], '')
```

5.

```js
//promise all
const fs = require('fs');

function promiseAll (arr) {
  return Promise.all(arr)
  .then(function success(res){
    return res.map(a => JSON.parse(a))
    .reduce((init,actual) => { 
      init = init.concat(actual)
      return init; 
    },[]);
  })
  .catch(function error(err) {
    throw err; 
  });
}

function readFile (path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path,'utf8',function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
}

promiseAll([
  readFile('./file01.json'),
  readFile('./file02.json')
])
.then( res =>  console.log(res))
.catch(err => console.error(err));
```

6.

```js

let users_values = {
	name: [ 
	  "Victor Igor"
	, "José Carlos"
	, "Joao Messias"
	, "Andy Self"
	, "Archer Gly"
	],	
	username: [
	  "vitus"
	, "jose123"
	, "juau"
	, "joaome"
	, "andy321"
	]
};

let addUsers = user => user['name']
	.reduce((prev, curr, i, a) => {
		prev.push({
		  name: curr		
		, bio: "place your bio here"
		, dateregister: Date.now()
		, avatarpath: "place your avatar here"
		, auth: {
		    username: user['username'][i]
		  , email:    user['username'][i]+"@hotmail.com"
		  ,	password: curr + Math.random().toString(36)
		  , online:   true
		  , disabled: false
		  , hashtoken: 'hash()'
		  }
		})
		return prev;
	},[]);
```

7.

```js
//alphabet position
const fs = require('fs');

let alphabet = fs.readFileSync('alphabet.txt', 'utf8')
	.trim()
	.split(' ')
	.map(n => n.toLowerCase())

let alphabetPosition = (text) => {
	return text
	.split('')
	.filter(n => n != ' ')
	.reduce((prev, curr) => prev.concat(alphabet.indexOf(curr) + 1), [])
	.join(' ')
}	
```
