const products = [
    'Dell hardcore  i29 200gb Laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1X59 lenovo comercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'dell purple color phone with Laptop'
]

// const searching = 'Leptop';
const searching = 'DEll';
const output = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output)

//includes 
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product)
    }
}
// console.log(output)

//startWith
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)