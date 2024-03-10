function getInputValue(inputId, displayArea, balanceArea, isWithdraw) {
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    const displayText = document.getElementById(displayArea);
    const displayNumber = parseFloat(displayText.innerText);
    const balanceText = document.getElementById(balanceArea);
    const balanceNumber = parseFloat(balanceText.innerText);
    if (isWithdraw == true && isNaN(inputNumber) == false && inputNumber > 0 && inputNumber <= balanceNumber) {
        const displayTotal = displayNumber + inputNumber;
        displayText.innerText = displayTotal;
        const balanceTotal = balanceNumber - inputNumber;
        balanceText.innerText = balanceTotal;
        inputText.value = ''
    }
    else if (isWithdraw == false && isNaN(inputNumber) == false && inputNumber > 0) {
        const displayTotal = displayNumber + inputNumber;
        displayText.innerText = displayTotal;
        const balanceTotal = balanceNumber + inputNumber;
        balanceText.innerText = balanceTotal;
        inputText.value = ''
    }
    else {
        inputText.value = ''
    }
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    getInputValue('deposit-input', 'deposit-total', 'balance-total', false)
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    getInputValue('withdraw-input', 'withdraw-total', 'balance-total', true)
})