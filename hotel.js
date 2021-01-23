function hotelCost(days){
var daysNumber = 0;
if ( days <=10){
daysNumber = days * 100;
} else if (days <=20){
var firstPart = 10 * 100;
var remaining = days-10;
var seceodPart = remaining * 80;
daysNumber = firstPart + seceodPart;
}
else{

    var firstPart = 10 * 100;
    var seceodPart = 10 * 80;
    var remaining = days-20;
    var thirdPart = remaining * 50;
    daysNumber = firstPart + seceodPart + thirdPart;
}
return daysNumber;
}
var totalCost = hotelCost(23);
console.log(totalCost);