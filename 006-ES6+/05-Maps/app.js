// Maps - Key - Value

//let myMap = new Map(); //Oluşturma

// console.log(myMap);

// const key1 = "ömer"
// const key2 = {a:10,b:20}
// const key3 = () => 2

//Set
// myMap.set(key1,"string değer")
// myMap.set(key2,"object Literal değer")
// myMap.set(key3,"function değer")

//Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

//Map Size

// console.log(myMap.size);

// const cities = new Map()

// cities.set("Ankara",5)
// cities.set("İstanbul",15)
// cities.set("İzmir",4)

//ForEach

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//ForOf

// for (let [key,value] of cities){
//     console.log(key,value);
// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

// const array = [["key1","value1"],["key2","value2"]]

// const lastMap = new Map(array)

// console.log(lastMap);

//Maplerden array oluşturma

const cities = new Map()

cities.set("Ankara",5)
cities.set("İstanbul",15)
cities.set("İzmir",4)

const array = Array.from(cities)

console.log(array);