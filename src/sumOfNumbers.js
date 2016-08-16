/* Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.*/

let GetSum = (a, b) => Array.from(new Array( a || b < 0 ? Math.abs(a) + Math.abs(b) + 1:  a < b ? b - a : a -b), (x, i) =>
      /* -- /o/  --*/   a < b ? a++: b++).reduce((prev, curr) => prev + curr, 0);


console.log(GetSum(82, 520));
