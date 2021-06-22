let value

const programmer = {
    name : "ömer hodo",
    age : "25",
    email: "omerhodo@gmail.com",
    langs: ["Python","Javascript","Go","C++"],

    address : {
        city : "Antalya",
        street: "Kepez"
    },

    work : function(){
        console.log("Programmer is work");
    }
}

value = programmer

value = programmer.email
value = programmer.langs
value = programmer.langs[0]
value = programmer.address.city

programmer.work()

const programmers = [
    {name: "ömerhodo", age:27},
    {name: "mc", age:27},
    {name: "yc", age:30},
    {name: "hd", age:27}
]

value = programmers[3].name

console.log(value);