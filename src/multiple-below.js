/* Returns the sum of all the multiples of 3 or 5 below the number passed in.
10 => 23, 5 => 3*/
let multiplebelow = (number) =>
	number <= 0 ? 0 :
	Array.from(new Array(number-1), (x, i) => i + 1)
	.reduce((prev, curr) => (curr % 3 == 0 || curr % 5 == 0) ? prev + curr: prev ,0)

console.log(multiplebelow(10))//23
console.log(multiplebelow(5))//3
console.log(multiplebelow(2))//0