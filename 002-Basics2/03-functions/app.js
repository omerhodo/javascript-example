// function merhaba(name="Bilgi yok",age ="bilgi yok"){
//     // if(typeof name === "undefined") name ="Bilgi yok"
//     // if(typeof age === "undefined") age ="Bilgi yok"

//     console.log(`İsim: ${name}, Yaş: ${age}`);
// }

// merhaba("hodo",27)

// merhaba("ayşe",23)

// merhaba()

// merhaba("kadir")

// function square(x){
//     return x*x;
// }

// square(3)

// function cube(x){
//     return x*x*x;
// }

// let a = cube(square(12))

// console.log(a);


function merhaba(){
    return "Merhaba";
}

console.log(merhaba());

//Function Expression

const merhaba2 = function(name){
    console.log("Merhaba " + name);
}

merhaba2("hodo")

//Imediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("merhaba" + name);
// })("omer");

const database= {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update:function(id){
        console.log(`id: ${id} güncellendi`);
    },
    delete: function(id){
        console.log(`id: ${id} silindi`);
    }
}

console.log(database.host)

database.add()
database.get()
database.update(21)
database.delete(10)