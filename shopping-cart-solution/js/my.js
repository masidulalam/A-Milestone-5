
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let produtNumber = productInput.value;
    if (isIncreasing == true) {
        produtNumber = parseInt(produtNumber) + 1
    }
    else if (produtNumber > 0) {
        produtNumber = parseInt(produtNumber) - 1
    }
    productInput.value = produtNumber
    //update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = produtNumber * price

    //update subtotal
    const subtotal = calculateTotal()
    const subTotalArea = document.getElementById('sub-total')
    subTotalArea.innerText = subtotal

    //add tax
    const tax = document.getElementById('tax-amount');
    let taxx = tax.innerText
    tax.innerText = subtotal * 18 / 100
    taxx = subtotal * 18 / 100

    //update total
    const total = document.getElementById('total-price')
    total.innerText = subtotal + taxx;

}

function calculateTotal() {
    const phoneNumber = document.getElementById('phone-number');
    const caseNumber = document.getElementById('case-number');
    const phoneTotal = parseInt(phoneNumber.value) * 1000;
    const caseTotal = parseInt(caseNumber.value) * 100;
    const subTotal = phoneTotal + caseTotal;
    return subTotal;
}

// handle case price handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1000, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1000, false)
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 100, true)

})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 100, false)
})