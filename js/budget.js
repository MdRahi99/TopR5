document.getElementById('btn-calculation').addEventListener('click', function(){
    const playerAmount = getAmountValueById('playerAmount');
    const playerExpenses = getPlayerExpensesValue(playerAmount);

    setAmountValueById('playerExpenses', playerExpenses);
})

document.getElementById('btn-totalCalculation').addEventListener('click', function(){
    const playerExpensesField = getExpensesValueById('playerExpenses');

    const managerAmount = getAmountValueById('managerAmount');
    const coachAmount = getAmountValueById('coachAmount');
    const otherExpenses = getOtherExpensesValue(managerAmount, coachAmount);

    const totalExpenses = playerExpensesField + otherExpenses;

    setAmountValueById('totalExpenses', totalExpenses);
})