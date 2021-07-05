// function getData(data){ //Promise objesi döner
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("olumlu")
//         },5000)
//     })
// }

// const { resolve } = require("path/posix")

// getData("merhaba").then(function(response){
//     console.log(response);
// })

// function getData(data){ //Promise objesi döner
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("olumsuz")
//         },5000)
//     })
// }

// getData("merhaba").catch(function(err){
//     console.log(err);
// })

// function getData(data){ //Promise objesi döner
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if (typeof data === "string"){
//                 resolve(data)
//             }
//             else {
//                 reject(new Error("string değil"))
//             }
//         },5000)
//     })
// }

// getData(1).then(function(response){
//     console.log("Gelen değer: " + response);
// }).catch(function(err){
//     console.error(err);
// })

// getData("hodo")
// .then(response => console.log("Değer: "+ response))
// .catch(err => console.error(err))

function addTwo(number){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if (typeof number === "number"){
                resolve(number + 2)
            }
            else {
                reject(new Error("hata var"))
            }
        },3000)
    })
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2
}).then(response2 => console.log(response2))
.catch(err => console.error(err))