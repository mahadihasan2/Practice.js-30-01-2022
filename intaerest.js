function getintarest(amount,persent,time){
    // let p = 3000;
    // let r = 30;
    // let n =2;
    let intarest = amount*persent*time/100;
    let getTotalAmount = amount + intarest;
    return getTotalAmount;


}
let firstamount = 3000;
let getpersent = 5;
let gettime = 2;
let totalAmountIs= getintarest(firstamount,getpersent,gettime);
console.log(totalAmountIs);