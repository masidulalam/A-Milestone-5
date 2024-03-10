function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input
    inputField.value = '';
    return amountValue;
}
/* function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
} */
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    }
    else if (amount > previousBalanceAmount) {
        balanceTotal.innerText = previousBalanceAmount - amount;
        // if (amount > previousBalanceAmount) {
        //     balanceTotal.innerText = previousBalanceAmount - amount;
        // }
        return previousBalanceAmount
    }
}
//or
// function updateBalance(amount) {
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceText)
//     balanceTotal.innerText = previousBalanceAmount + amount;
// }
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposit
    // const depositInput = document.getElementById('deposit-input');
    // const DepositAmountText = depositInput.value;
    // const depositAmount = parseFloat(DepositAmountText);

    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true)
    }

    // update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText
    // const previousDepositAmount = parseFloat(previousDepositText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    // update balance total 
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(previousBalanceText)
    // const newBalanceTotal = previousBalanceAmount + depositAmount;
    // balanceTotal.innerText = newBalanceTotal

    // //clear deposit input
    // depositInput.value = ''
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawInputText);
    const previousBalanceAmount = getInputValue('withdraw-input')

    const withdrawAmount = getInputValue('withdraw-input')
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
        // balanceTotal.innerText = previousBalanceAmount - amount
    }
    // update withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawAmount + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // update balance total 
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText)
    // const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    // balanceTotal.innerText = newBalanceTotal
    // updateBalanceField(withdrawAmount)

    //or nijer mathai elo sir o bllo hoi
    // updateBalance(-withdrawAmount)
})