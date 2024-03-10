function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}
const sum = addNumbers(13, 25);
// console.log(sum);

function addNumbers2() {
    // console.log(arguments);
    // console.log(arguments[1]);
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;
}
const sum2 = addNumbers2(13, 25, 23, 45, 24);
// console.log(sum2);

function getFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
const myName = getFullName('masidul', 'alam');
// console.log(myName)

function getFullName2() {
    let fullName = ''
    for (const part of arguments) {
        // let names = name + ' '
        fullName = fullName + part + ' '
    }
    return fullName
}
const myName2 = getFullName2('masidul', 'alam', 'bin', 'fansur', 'rahaman', 'bin', 'abed', 'ali');
console.log(myName2)