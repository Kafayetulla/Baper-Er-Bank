// step-1

document.getElementById ('btn-withdraw').addEventListener('click',function(){
    // step-2
    const witdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = witdrawField.value;
    const newWithdraw =parseFloat(newWithdrawString);
    // step-3
    witdrawField.value='';
    // step-4
    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const perviousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    //step-5
     newWithdrawTotal =  newWithdraw + perviousWithdrawTotal;
     withdrawTotalElement.innerText=newWithdrawTotal;
    //  step-6
    const balanceTotal =document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step-7
const totalWithdraw = previousBalanceTotal -newWithdrawTotal;
balanceTotal.innerText = totalWithdraw;

})