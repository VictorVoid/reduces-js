const fs = require('fs');

let alphabet = fs.readFileSync('alphabet.txt', 'utf8')
	.trim()
	.split(' ')
	.map(n => n.toLowerCase());

let alphabetPosition = (text) => {
	return text
	.split('')
	.filter(n => n != ' ')
	.reduce((prev, curr) => prev.concat(alphabet.indexOf(curr) + 1), [])
	.join(' ');
};

console.log(alphabetPosition('a sd')); // 1 19 4
