//withdraw amount er condition ta nije korlam  
function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount, isAdd, isBalanceBigger) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText);
    if (isAdd == true) {
        totalElement.innerText = previousTotal + amount;
    }
    else if (isAdd == false && isBalanceBigger == true) {
        totalElement.innerText = previousTotal + amount;
    }
    else if (isAdd == false) {
        updateBalance(amount, isAdd)
    }
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    }
    else if (isAdd == false && previousBalanceAmount >= amount) {
        balanceTotal.innerText = previousBalanceAmount - amount;
        updateTotalField('withdraw-total', amount, false, true)
    }
}
//or nijer mathai elo sir o bllo hoi
// function updateBalance(amount) {
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceText)
//     balanceTotal.innerText = previousBalanceAmount + amount;
// }
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount, true)
        updateBalance(depositAmount, true)
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    //or nijer mathai elo sir o bllo hoi
    // updateBalance(-withdrawAmount)
})