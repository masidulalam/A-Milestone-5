function generatePin() {
    const pin = Math.round(Math.random() * 10000)
    if (pin > 1000) {
        document.getElementById('input').value = pin
        return pin;
    }

}
const buttons = document.getElementsByClassName('button')

const typedNumber = document.getElementById('type-input')

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const buttonText = event.target.innerText
        if (event.target.innerText == 'C') {
            typedNumber.value = ''
        }
        else if (event.target.innerText == 'D') {
            typedNumber.value = typedNumber.value.substring(0, typedNumber.value.length - 1)
        }
        else {
            typedNumber.value = typedNumber.value + buttonText
            return typedNumber.value
        }
    })
}
let generatedPin = generatePin();
const matched = document.getElementById('matched')
const notMatched = document.getElementById('not-matched')
document.getElementById('submitf').addEventListener('click', function () {
    if (generatedPin == typedNumber.value) {
        matched.removeAttribute('hidden')
        typedNumber.value = ''
        document.getElementById('input').value = ''
    }
    else {
        notMatched.removeAttribute('hidden')
        typedNumber.value = ''
        document.getElementById('input').value = ''
    }
})


//chesta korchilam but smoothly kaj korcghe na