'use strict';

// 1. isHometown

function isHometown(town){
    let home = false;
    if(town === "San Francisco"){
        home = true;
    }
    return home
}

console.log(isHometown("Atlanta"))
console.log(isHometown("San Francisco"))

// 2. getFullName
function getFullName(firstname,lastname){

    const fullname = `${firstname} ${lastname}`;
    console.log(fullname)

}

getFullName("Dylan", "Ligon")
// Define your function here

// 3. calculateTotal

function calculateTotal(base_price, state, tax = .05){
    let subtotal = base_price * (1 + tax);
    let fee = 0
    if (state === "CA"){
        fee = 0.03 * subtotal
    }
    else if (state === "PA"){
        fee = 2
    }
    else if (state === "MA"){
        if (base_price <= 100 ){
            fee = 1
        }
        else{
            fee = 3
        }
    }
    return subtotal + fee
}

console.log(calculateTotal(5, 'OR', .00))
console.log(calculateTotal(5, 'CA'))