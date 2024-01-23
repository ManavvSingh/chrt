// callbacks
// const cart = ["shoes","pants"];
// api.createOrder(cart,function(){
//     api.proceedToPayment()
// })
// disadv: 1. Callback hell 
//         2. Inversion of control 

//Promises
const myAPI = "https://fakerapi.it/api/v1/persons"

const myPromise = fetch(myAPI);

console.log(myPromise)

myPromise.then(function(data){
    console.log(data);
})