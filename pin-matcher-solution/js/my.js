function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

//generate pin events
const generateInput = document.getElementById('gen-input');
document.getElementById('gen-btn').addEventListener('click', function () {
    const generatedNumber = generatePin();
    if (generatedNumber > 1000) {
        generateInput.value = generatedNumber;
    }
})

// typing pin events
const buttons = document.getElementsByClassName('button');
const typedNumber = document.getElementById('type-input');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const buttonText = event.target.innerText
        if (event.target.innerText == 'C') {
            typedNumber.value = '';
        }
        else if (event.target.innerText == 'D') {
            typedNumber.value = typedNumber.value.substring(0, typedNumber.value.length - 1);
        }
        else {
            typedNumber.value += buttonText;
        }
    })
}

// match not matched events
const matched = document.getElementById('matched-text')
const notMatched = document.getElementById('not-matched-text')
document.getElementById('submit-btn').addEventListener('click', function () {
    if (typedNumber.value == '' || generateInput.value == '') {
        notMatched.removeAttribute('hidden');
        matched.setAttribute('hidden', true);
        typedNumber.value = '';
        generateInput.value = '';
    }
    else if (generateInput.value == typedNumber.value) {
        matched.removeAttribute('hidden');
        notMatched.setAttribute('hidden', true);
        typedNumber.value = '';
        generateInput.value = '';
    }
    else {
        notMatched.removeAttribute('hidden');
        matched.setAttribute('hidden', true);
        typedNumber.value = '';
        generateInput.value = '';
    }

})


//nije korlam khub smmothly kaj korche