function billTotal(cost, tip){
var bill = (cost + (cost * 0.095)) + (cost * tip/100);
return bill;
}
