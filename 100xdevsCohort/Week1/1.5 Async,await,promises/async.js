// setTimeout(func,ms)

// const { log } = require("async");

// console.log('First')

// function findSum(){
//     let a = 0;
//     for (let index = 0; index < 100000; index++) {
//         a++;
//     }
//     console.log('third')
// }
// setTimeout(findSum,1000);
// console.log('second');

// Promises 

// function calcSum(){
//     return new Promise(function(resolve){
//         const a = 5;
//         resolve(a);
//     });
// }

// function onDone(a){
//     console.log(a)
// }

// calcSum().then(onDone);

// let p = new Promise(function(resolve,reject){
//     let data = {username: 'Manav', USN: '033'}
//     resolve(data);
// })

// p.then((mydata)=>{
//     console.log(mydata.username);
// })

function manav(){
    let p = new Promise(function(resolve){
        setTimeout(() => {
            resolve('some data');
        }, 2000);
    });
    return p;
}



async function main(){
    let value = await manav();
    // value.then((data) => console.log(data));
    console.log(value);
}

main();
let a = 0;
for(let i = 0; i<100000;i++){
    a = a+i;
}
console.log(a);