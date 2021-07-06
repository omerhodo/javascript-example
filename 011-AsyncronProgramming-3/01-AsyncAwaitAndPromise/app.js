// async function test(data){
//     //Promise (return new Promise)
//     // return data
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("Bu bir değer.")
//         },5000)
//     })

//     let response = await promise

//     return response

// }

// test("Merhaba")
// .then(response => console.log(response))

// async function testData(data){
//     let promise = new  Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if (typeof data === "string"){
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("Lütfen string bir değer girin"))
//             }
//         },5000)
//     })

//     const response = await promise;

//     return response
// }

// testData("hodo")
// .then(data => console.log(data))
// .catch(err => console.log(err))

async function getCurrency(url){

    const response = await fetch(url)

    const data = await response.json()

    return data
}

getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=70181c0ab5d7c70dd22b31ab647d8c17")
.then(data => console.log(data))
.catch(err => console.log(err))