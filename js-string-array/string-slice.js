const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
// console.log(words);
const withoutA = anthem.split('a');
// console.log(withoutA);
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);
const anothePart = anthem.substr(5, 8);
// console.log(anothePart);
const anotheAnothePart = anthem.substring(5, 13);
// console.log(anotheAnothePart);

//concat
const first = 'amader';
const second = 'Sohor';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('Rj priyanka');
// console.log(fullString)

const word = ['alim', 'balim', 'calim', 'dalim'];
// const allJoined = word.join('');
// const allJoined = word.join(' ');
// const allJoined = word.join(',');
// const allJoined = word.join(', ');
const allJoined = word.join('www');
console.log(allJoined);