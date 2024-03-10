//nijer kora
/* document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount
    const depositField = document.getElementById('deposit-input');
    const depositValue = depositField.value;
    const depositNumber = parseInt(depositValue);

    // add the amount 
    const depositText = document.getElementById('deposit-total');
    const depositTextToNumber = parseInt(depositText.innerText);
    depositText.innerText = depositTextToNumber + depositNumber;

    const balanceText = document.getElementById('balance-total');
    const balanceTextToNumber = parseInt(balanceText.innerText);
    balanceText.innerText = balanceTextToNumber + depositNumber;

    depositField.value = ''
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawValue = withdrawField.value;
    const withdrawNumber = parseInt(withdrawValue);

    // add the amount 
    const withdrawText = document.getElementById('withdraw-total');
    let withdrawTextToNumber = parseInt(withdrawText.innerText);
    withdrawText.innerText = withdrawTextToNumber + withdrawNumber;

    const balanceText = document.getElementById('balance-total');
    const balanceTextToNumber = parseInt(balanceText.innerText);
    balanceText.innerText = balanceTextToNumber - withdrawNumber;

    withdrawField.value = ''
}) */


//sir er kora
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const DepositText = depositInput.value;
    const newDepositAmount = parseFloat(DepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + newDepositAmount;

    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)
    balanceTotal.innerText = previousBalanceAmount + newDepositAmount;

    //clear deposit input
    depositInput.value = ''
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal

    //clear withdraw input
    withdrawInput.value = ''
})