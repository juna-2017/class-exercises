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


// var PERCENT_SHIPPING = 0.2;
// var HANDLING_COST = 4;

// function AddShippingCost(x) {
//     return (x * PERCENT_SHIPPING) + x;
// }



// console.assert(AddShippingCost(10) === 12);
// console.assert(AddShippingCost(20) === 24);
// console.assert(AddShippingCost(30) === 36);


// function AddHandlingCost(x) {
//     return x + HANDLING_COST;
// }

// console.assert(AddHandlingCost(10) === 14);
// console.assert(AddHandlingCost(20) === 24);
// console.assert(AddHandlingCost(30) === 34);


// function AddShippingAndHandling(x) {
//     return ((x * PERCENT_SHIPPING) + x)  + HANDLING_COST;
// }

// console.assert(AddShippingAndHandling(10) === 16);
// console.assert(AddShippingAndHandling(20) === 28);
// console.assert(AddShippingAndHandling(30) === 40);


// // Example 2
// // global variables
// var HANDLING_COSTS = 4;
// var SHIPPING_RATE = 0.1;

// //functions
// function getHandling(x) {
//   return HANDLING_COSTS;
// }

// function getShipping(x) {
//   return x * SHIPPING_RATE;
// }

// function getTotalCost(x) {
//   return x + getHandling(x) + getShipping(x);
// }

// //unit tests: tests one function
// console.assert(getHandling(10) === 4);
// console.assert(getHandling(20) === 4);

// console.assert(getShipping(10) === 1);
// console.assert(getShipping(20) === 2);
// console.assert(getShipping(100) === 10);

// //integration tests: tests more thn one function
// console.assert(getTotalCost(10) === 15);
// console.assert(getTotalCost(20) === 26);
// console.assert(getTotalCost(30) === 37);


// global variables
var HANDLING_COSTS = 4;
var SHIPPING_RATE = 0.1;
var TAX_RATE = 0.1;

//functions
function getHandling(itemPrice) {
  if (itemPrice < 20) {
    return 0;
  } else {
    return HANDLING_COSTS;
  }
}

function getShipping(itemPrice) {
  return itemPrice * SHIPPING_RATE;
}

function getTax(itemPrice, isTaxExempt) {
  if (isTaxExempt) {
    return 0
  } else {
    return itemPrice * TAX_RATE;
  }
}

function getTotalCost(item) {
  return (
    item.price +
    getHandling(item.price) +
    getShipping(item.price) +
    getTax(item.price, item.isTaxExempt)
  );
}

function printItem(item) {
    console.log ("itemID:", item.id, item.description, "Price: $", item.price, "cost: $", getTotalCost(item))
}

//unit tests: tests one function
console.assert(getHandling(10) === 0);
console.assert(getHandling(20) === 4);

console.assert(getShipping(10) === 1);
console.assert(getShipping(20) === 2);
console.assert(getShipping(100) === 10);

console.assert(getTax(10, false) === 1);
console.assert(getTax(20, false) === 2);
console.assert(getTax(10, true) === 0);
console.assert(getTax(20, true) === 0);

//integration tests: tests more thn one function
console.assert(getTotalCost({ price: 10, isTaxExempt: false }) === 12);
console.assert(getTotalCost({ price: 20, isTaxExempt: false }) === 28);
console.assert(getTotalCost({ price: 30, isTaxExempt: false }) === 40);

var testItems = [
    {
        id: 001, price: 5, isTaxExempt: true, description: 'Wonderglue'
    },

    {
        id: 002, price: 7, isTaxExempt: false, description: 'Tire Iron'
    },

    {
        id: 003, price: 30, isTaxExempt: false, description: 'Plasma Pistol'
    }

]

for(var i= 0; i < testItems.length; i++) {
    console.log(i);
    printItem(testItems[i]);
}