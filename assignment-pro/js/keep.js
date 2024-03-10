function enableButton(id) {
    const applyBUtton = document.getElementById(id)
    applyBUtton.removeAttribute('disabled')
    applyBUtton.classList.add('enabled-btn')
}
document.getElementById('coupon-code').addEventListener('click', function (event) {
    const codeAply = document.getElementById('apply-input')
    codeAply.value = event.target.innerText
    enableButton('apply-btn')
})
document.getElementById('apply-input').addEventListener('keyup', function () {
    enableButton('apply-btn')
})
document.getElementById('apply-input').addEventListener('change', function () {
    enableButton('apply-btn')
})
const products = document.getElementsByClassName('img-white-bg');
for (const product of products) {
    product.addEventListener('click', function () {
        const productName = product.querySelector('h2');
        const productList = document.getElementById('product-names')
        const newLi = document.createElement('li')
        newLi.innerText = productName.innerText
        productList.appendChild(newLi)
        const productPrice = product.querySelector('p');
        const productPriceNumber = parseFloat(productPrice.innerText)
        const totalPrice = document.getElementById('total-price');
        const previousTotalPrice = parseFloat(totalPrice.innerText);
        const newTotalPrice = previousTotalPrice + productPriceNumber;
        totalPrice.innerText = newTotalPrice;
        document.getElementById('total').innerText = newTotalPrice
        enableButton('purchase-btn')
    })
}
document.getElementById('apply-btn').addEventListener('click', function () {
    const discount = document.getElementById('discount')
    const totalPrice = document.getElementById('total-price');
    const previousTotalPriceNumber = parseFloat(totalPrice.innerText);
    const couponInput = document.getElementById('apply-input')
    const couponCode = couponInput.value;
    const total = document.getElementById('total')
    const discountNumber = parseFloat(previousTotalPriceNumber * 50 / 100).toFixed(2)
    console.log(couponCode)
    if (couponCode == 'SELL200') {
        discount.innerText = discountNumber
        total.innerText = previousTotalPriceNumber - discountNumber
    }
})