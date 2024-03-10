function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const value = parseFloat(inputField.value);
    inputField.value = ''
    return value
}
function updateTotal(fieldId, amount, isWithdraw) {
    const totalTag = document.getElementById(fieldId);
    const value = parseFloat(totalTag.innerText);
    if (isWithdraw == false) {
        totalTag.innerText = value + amount;
    }
    return value;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount, false);
        updateTotal('balance-total', amount, false)
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = updateTotal('balance-total', amount, true);
    if (amount <= balance && amount > 0) {
        updateTotal('withdraw-total', amount, false)
        updateTotal('balance-total', -amount, false)
    }
})