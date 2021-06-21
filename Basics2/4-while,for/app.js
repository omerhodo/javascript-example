//While Loops


// let i = 0

// while(i<10){
//     console.log("i="+ i);
//     i++;
// }

//let i = 0

// while(i>0){
//     console.log(i)
//     //i--
//     i-=2;
// }

//Break and Continue

// while(i<10){
//     console.log(i);
//     if(i==5){
//         break
//     }
//     i++
// }


// while(i<10){
//     if(i==3 || i==5){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

//Do while loops

// do{
//     console.log(i);
//     i++
// }while(i<10)

const langs = ["Python","JS","C++"]

// let index = 0

// while(index < langs.length){
//     console.log(langs[index]);
//     index++
// }

// for (let index=0; index<langs.length; index++){
//     console.log(langs[index]);
// }

// langs.forEach(function(lang, index){
//     console.log(lang, index);
// })

// const users=[
//     {name:"hodo",age:27},
//     {name:"mc",age:27},
//     {name:"hd",age:28},
//     {name:"yc",age:30},
// ]

// const names = users.map(function(user){
//     return user.name
// })

// const ages = users.map(function(user){
//     return user.age
// })

// console.log(names);
// console.log(ages);

const users = {
    name:"hodo",
    age:27
}

for (let key in users){
    console.log(key, users[key]);
}