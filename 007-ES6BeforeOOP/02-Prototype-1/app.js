// const object = new Object();
// const object2 = new Object();
// object.name = "Ömer"
// console.log(object);

function Employee(name,age){
    this.name = name
    this.age = age
    this.showInfos = function(){
        console.log("Bilgiler gösteriliyor");
    }
    this.toString = function(){
        console.log("Hello there");
    }
}

const emp1 = new Employee("Ömer",27)
// console.log(emp1);

console.log(emp1.toString());