//typeError
const myName = 'masidul';
// myName = 'alam';
// console.log(myName);

//sytaxError
// for (let i = 0; i < 10 i++) {

// }

// const student
// const student = undefined;
// console.log(student.name)
// console.log(student())
try {
    myName = 'alam';
}
// catch (er) {
//     console.log('my error', er)
// }
catch (error) {
    // console.log('getting error')
    console.log('getting error', error)
}
console.log(100);
console.log(myName);
