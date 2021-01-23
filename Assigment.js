function kiloToMeter (kilometer)
{
    var meter = kilometer * 1000;
    return meter;
}
var nanaFeet = kiloToMeter(.70);
console.log(nanaFeet);
var dadaFeet = kiloToMeter(.79);
console.log(dadaFeet);


// secendproblem is here
function budgetCalculator(clock,phone, laptop){
    var result = clock * 3 + phone * 6 + laptop * 8;
        return result;
    }
    var totalCost = budgetCalculator(100,8000,30000);
    console.log(totalCost);
    
    // thirdproblem solution is here

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