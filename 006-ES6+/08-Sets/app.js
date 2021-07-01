//Sets

const mySet = new Set();

mySet.add("ömer")
mySet.add(27)
mySet.add(27) //Eklenmiyor
mySet.add(3.14)
mySet.add([1,2,3])
mySet.add(true)
mySet.add({a:1,b:2,c:3})

const mySet2 = new Set([100,3.14,"Hodo"])

// console.log(mySet);
// console.log(mySet2);

//Size

// console.log(mySet.size);
// console.log(mySet2.size);

//Delete

// mySet.delete(27)
// mySet.delete("ömer")
// console.log(mySet);

//Has

// console.log(mySet.has("ömer")); //Var mı sorgusu
// console.log(mySet.has(26));


//ForEach

// mySet.forEach(function(value){
//     console.log(value);
// })

//ForOf

// for(let value of mySet){
//     console.log(value);
// }

const array = Array.from(mySet)
console.log(array);