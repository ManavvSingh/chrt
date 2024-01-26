// callbacks
// const cart = ["shoes","pants"];
// api.createOrder(cart,function(){
//     api.proceedToPayment()
// })
// disadv: 1. Callback hell 
//         2. Inversion of control 

//Promises
// const myAPI = "https://fakerapi.it/api/v1/persons"

// const myPromise = fetch(myAPI);

// console.log(myPromise)

// myPromise.then(function(data){
//     console.log(data); 
// })

// Creating a promise

const cart = ["shoes","pants"];
const promise = createOrder(cart);


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        const orderID = "13";
        if(orderID!="123"){
            const err = new Error("cart is not valid");
            reject(err);
        }
        if(orderID=="123"){
            resolve(orderID);
        }
    });
    return pr;
}


promise
    .then((id)=>{console.log(id)})
    .then(function(paymentInfo){
        console.log(paymentInfo)
    })
    .catch((err)=>{console.log(err.message)})
 