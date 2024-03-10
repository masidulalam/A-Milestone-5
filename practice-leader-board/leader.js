// document.getElementById('top-player').style.color = 'red';
// document.getElementById('middle-player').style.backgroundColor = 'rgba(255, 99, 71, 0.5)'
// document.getElementById('middle-player').style.padding = '5px'
// document.getElementById('middle-player').style.borderRadius = '10px';
// document.getElementById('fruit-btn').style.padding = '5px'
// document.getElementById('fruit-btn').style.backgroundColor = 'rgba(255, 99, 71, 0.5)'
// document.getElementById('fruit-section').style.padding = '85px'

// document.getElementById('fruit-btn').addEventListener('click', function
//     () {
//     const fruitList = document.getElementById('fruit-list');
//     let li = document.createElement('li')
//     li.innerText = 'lorem2';
//     fruitList.appendChild(li);
// })



// document.getElementById('add-btn').addEventListener('click', function () {
//     const inputBox = document.getElementById('input-box')
//     const addButton = document.getElementById('add-btn')
//     let inputNumber = parseInt(inputBox.value);
//     inputBox.value = inputNumber + 1
//     if (inputBox.value == 5) {
//         addButton.setAttribute('disabled', true)
//     }
// })

const books = [
    'Head First JavaScript Programming',
    'A Smarter Way to Learn JavaScript',
    'Eloquent JavaScript',
    'Learn JavaScript Visually',
    'Effective JavaScript',
    'JavaScript: The Good Parts',
    'JavaScript: The Definitive Guide'
]

const javaBooks = []
for (const book of books) {
    // if (book.toLowerCase().indexOf('javascript') != -1) {
    //     javaBooks.push(book)
    // }
    if (book.toLowerCase().includes('javascript')) {
        javaBooks.push(book)
    }
}
// console.log(javaBooks);

const numbers = [45, 5, 6, 7, 9, 8, 1, 78, 99, 105, 222, 2];
const sortedNumbers = numbers.sort(function (a, b) {
    return a - b
});
console.log(sortedNumbers)