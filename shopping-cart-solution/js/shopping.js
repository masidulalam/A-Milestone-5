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
    productTotal.innerText = produtNumber * price;
    calculateTotal()
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1000;
    const caseTotal = getInputValue('case') * 100;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * 18 / 100;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events
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