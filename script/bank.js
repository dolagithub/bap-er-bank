//handel diposit & balance event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    //input diposit amount

    const inputAmount = document.getElementById('deposit-amount');
    const newdipositAmountText = inputAmount.value;
    const newdipositAmount = parseFloat(newdipositAmountText);
    console.log(newdipositAmount);

    //total diposit amount

    const dipositTotal = document.getElementById('diposit-total');
    const currentdipositamountText = dipositTotal.innerText;
    const currentdipositamount = parseFloat(currentdipositamountText);
    const newdipositTotal = currentdipositamount + newdipositAmount;
    dipositTotal.innerText = newdipositTotal;

    //total balance amount

    const currentBalance = document.getElementById('total-balance');
    const currentBalanceTotalText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceTotalText);
    const newBalanceTotal = newdipositTotal + currentBalanceTotal;
    currentBalance.innerText = newBalanceTotal;

    //clear diposit input value
    inputAmount.value = '';
});

//handel withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clear withdraw amount
    withdrawInput.value = '';

    //withdraw balance
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const BalanceAfterWithdraw = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = BalanceAfterWithdraw;
})

