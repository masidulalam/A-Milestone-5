const numbers = [3, 4, 5, 8, 7, 9, 12, 35, 45, 65, 78, 25, 12, 46];
//sliced
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);

// const numberSpliced2 = numbers.splice(4, 3, 789, 456, 1);
// const numberSpliced2 = numbers.splice(4, 3, 789, 456, 888, 777, 999, 222);
const numberSpliced2 = numbers.splice(4, 0, 789, 456, 888, 777, 999, 222);
console.log(numberSpliced2);
console.log(numbers);