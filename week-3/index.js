// function triple(x) {
//     return x * x * x;
// }



// console.assert(triple(2) === 8);
// console.assert(triple(0) === 0);
// console.assert(triple(-3) === -27);

// function IsEven(x) {
//     var remainder = x % 2;
//     if (remainder === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.assert(IsEven(2) === true);
// console.assert(IsEven(22) === true);
// console.assert(IsEven(3) === false);


// function IsOdd(x) {
//     var remainder = x % 2;
//     if (remainder === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.assert(IsOdd(3) === true);
// console.assert(IsOdd(22) === false);
// console.assert(IsOdd(3) === true);


var PERCENT_SHIPPING = 0.2;
var HANDLING_COST = 4;

function AddShippingCost(x) {
    return (x * PERCENT_SHIPPING) + x;
}



console.assert(AddShippingCost(10) === 12);
console.assert(AddShippingCost(20) === 24);
console.assert(AddShippingCost(30) === 36);


function AddHandlingCost(x) {
    return x + HANDLING_COST;
}

console.assert(AddHandlingCost(10) === 14);
console.assert(AddHandlingCost(20) === 24);
console.assert(AddHandlingCost(30) === 34);


function AddShippingAndHandling(x) {
    return ((x * PERCENT_SHIPPING) + x)  + HANDLING_COST;
}

console.assert(AddShippingAndHandling(10) === 16);
console.assert(AddShippingAndHandling(20) === 28);
console.assert(AddShippingAndHandling(30) === 40);