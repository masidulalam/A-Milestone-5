function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valuInText = inputField.value;
    const value = parseFloat(valuInText);
    inputField.value = ''
    return value
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId)
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}
function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance + amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount)
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total')
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(-amount)
    }
})