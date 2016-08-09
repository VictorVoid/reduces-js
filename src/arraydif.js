//It should remove all values from list a, which are present in list b.
//difference([1,2],[1]) == [2] difference([1,2,2,2,3],[2]) == [1,3]
let array_diff = (a, b) => a.reduce((prev, curr) => (!b.includes(curr) && prev.push(curr), prev), []);
console.log(array_diff([1,2,2,2,3], [2])); //[1,3]
