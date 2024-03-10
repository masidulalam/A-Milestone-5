function getBalance() {
    const balanceText = document.getElementById('balance');
    const balanceNumber = parseFloat(balanceText.innerText);
    return [balanceNumber, balanceText];
}
document.getElementById('calculate').addEventListener('click', function () {
    const incomeText = document.getElementById('income').innerText;
    const incomeNumber = parseFloat(incomeText);
    const foodText = document.getElementById('food');
    const foodNumber = parseFloat(foodText.value);
    const rentText = document.getElementById('rent');
    const rentNumber = parseFloat(rentText.value);
    const clothesText = document.getElementById('clothes');
    const clothesNumber = parseFloat(clothesText.value);
    const foodError = document.getElementById('food-error');
    const rentError = document.getElementById('rent-error');
    const clothesError = document.getElementById('clothes-error');
    if (foodNumber < 0 || isNaN(foodNumber)) {
        foodError.removeAttribute('hidden');
        rentError.setAttribute('hidden', true);
        clothesError.setAttribute('hidden', true);
    }
    else if (rentNumber < 0 || isNaN(rentNumber)) {
        rentError.removeAttribute('hidden');
        foodError.setAttribute('hidden', true);
        clothesError.setAttribute('hidden', true);
    }
    else if (clothesNumber < 0 || isNaN(clothesNumber)) {
        clothesError.removeAttribute('hidden');
        foodError.setAttribute('hidden', true);
        rentError.setAttribute('hidden', true);
    }
    else {
        //update total expenses
        const expenceText = document.getElementById('expence');
        const expencePreviousNumber = parseFloat(expenceText.innerText);
        const expensesTotal = foodNumber + rentNumber + clothesNumber;
        const balanceArea = getBalance();
        const expenceError = document.getElementById('expence-error');
        if (expensesTotal <= balanceArea[0]) {
            expenceText.innerText = expencePreviousNumber + expensesTotal;
            balanceArea[1].innerText = incomeNumber - expensesTotal - expencePreviousNumber;
            expenceError.style.visibility = 'hidden'
        }
        else {

            expenceError.style.visibility = 'visible'
        }
        clothesError.setAttribute('hidden', true);
        rentError.setAttribute('hidden', true);
        foodError.setAttribute('hidden', true);
        foodText.value = '';
        rentText.value = '';
        clothesText.value = '';
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    const balanceArea = getBalance();

    //get saving percentage
    const percentageInput = document.getElementById('savings-percent');
    const parcentageNumber = parseFloat(percentageInput.value);

    const savingsTotal = balanceArea[0] * parcentageNumber / 100;
    //get previous saving amount
    const savingsAmountText = document.getElementById('savings-amount');
    const previousSavingsNumber = parseFloat(savingsAmountText.innerText);


    if (previousSavingsNumber + savingsTotal <= balanceArea[0]) {
        //update saving amount
        savingsAmountText.innerText = previousSavingsNumber + savingsTotal

        //update remaining balance
        const remaining = document.getElementById('remaining');
        remaining.innerText = balanceArea[1].innerText - savingsAmountText.innerText;
    }
    else {
        const balanceError = document.getElementById('balance-error');
        balanceError.style.visibility = 'visible'
    }

})