// let a,b

// a="ömer"
// b="ömer"

// if(a===b){
//     console.log("eşit");
// }

// let array1 = [1,2,3,4,5,6]
// let array2 = [1,2,3,4,5,6]

// if(array1 === array2){
//     console.log("Eşit");
// }
// else{
//     console.log("Eşit değil");
// }

// const person1 = {
//     name:"ömer",
//     age:27
// }
// const person2 = {
//     name:"ömer",
//     age:27
// }

// if(person1 === person2){
//     console.log("Eşit");
// }
// else{
//     console.log("Eşit değil");
// }

const cities = new Map();
const key=[1,2,3]

cities.set("ankara",5)
cities.set("istanbul",15)
// cities.set([1,2,3],"Array")
cities.set(key,"array")

console.log(cities.get(key));

