//Klasik Yöntem

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// }

// const emp1 = new Employee("hodo",27,4000)

// console.log(emp1);

//ES6 Yöntemi

class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("ömer",28,5000)

console.log(emp);
emp.showInfos()

