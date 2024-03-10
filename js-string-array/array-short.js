const numbers = [2, 8, 6, 3, 4, 1, 7, 9, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['amir', 'rubel', 'sumo', 'masidul', 'mdmasidul', 'beb'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends)
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

const bigNumbers = [66, 55, 58, 7, 8, 2, 45, 87, 105];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedBigNumbers);