function getInputValue(inputId, displayArea, isAdd) {
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    const displayText = document.getElementById(displayArea);
    const displayNumber = parseFloat(displayText.innerText);
    if (isAdd == true /* && isNaN(inputNumber) == false //d'not need*/ && inputNumber > 0) {
        displayText.innerText = displayNumber + inputNumber;
    }
    else if (isAdd == false /* && isNaN(inputNumber) == false //d'not need*/ && inputNumber > 0) {
        displayText.innerText = displayNumber - inputNumber;
    }
    return [inputText, inputNumber, displayNumber];
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = getInputValue('deposit-input', 'deposit-total', true);
    getInputValue('deposit-input', 'balance-total', true);
    deposit[0].value = '';
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = getInputValue('withdraw-input', 'balance-total');
    if (withdraw[1] <= withdraw[2]) {
        getInputValue('withdraw-input', 'withdraw-total', true);
        getInputValue('withdraw-input', 'balance-total', false);
    }
    withdraw[0].value = '';
})