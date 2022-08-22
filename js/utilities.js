// Selection Field Function
function getPlayerNameById(playerId){
        const getValue = document.getElementById(playerId);
        const getName = getValue.innerText;
        return getName;
}

// Budget Field Function
function getAmountValueById(AmountId){
    const getAmountField = document.getElementById(AmountId);
    const getAmount = parseFloat(getAmountField.value);
    getAmountField.value = '';
    return getAmount;
}

function getExpensesValueById(ExpenseId){
    const getExpenseField = document.getElementById(ExpenseId);
    const getExpense = parseFloat(getExpenseField.innerText);
    return getExpense;
}

function getPlayerExpensesValue(value1){
    const playerExpenses = value1 * 5;
    return playerExpenses;
}
function getOtherExpensesValue(value1, value2){
    const otherExpenses = value1 + value2;
    return otherExpenses;
}

function setAmountValueById(AmountId, newValue){
    const getAmountField = document.getElementById(AmountId);
    getAmountField.innerText = newValue;
}
