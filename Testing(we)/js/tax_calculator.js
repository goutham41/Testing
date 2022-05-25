
function  tax(income){
    if(income >= 1000000){
        return income/100 * 30
    }
    else if(income > 500000 && income < 1000000){
         return (income / 100) * 20;
    }
    else if (income > 250000 && income < 500000) {
       return (income / 100) * 10;
    }
    else{
        return income
    }
   
}

module.exports = tax