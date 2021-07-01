const person = {
    name : "Ömer",
    age : 27,
    salary : 3000
}

const langs = ["Python","Go","Ruby"]

const name = "ÖmerHodo"

//ForIn
//Object
// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// for (let index in langs){
//     console.log(index,langs[index]);
// }

// for (let index in name){
//     console.log(index,name[index]);
// }

//ForOf

for (let value of langs){
    console.log(value);
}

//String

for (let character of name){
    console.log(character);
}