//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
    const depositFile = document.getElementById('deposit-file');
    const newDepositString = depositFile.value;
    const newDepositAmount =parseFloat(newDepositString);
    //step-3
    depositFile.value ='';
    // step-4
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalElement = parseFloat(previousDepositTotalString);
    // step-5
    const newDepositTotal =previousDepositTotalElement + newDepositAmount;
depositTotalElement.innerText= newDepositTotal;
// step-6
const balanceTotal =document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step-7
const  newTotalBalance = newDepositAmount + previousBalanceTotal;
balanceTotal.innerText=newTotalBalance;
})