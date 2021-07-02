const obj={
    test1:function(){
        console.log("Test1");
    },
    test2:function(){
        console.log("Test2");
    }
}
// console.log(obj);

// const emp = Object.create(obj)

// emp.name="ömer"
// emp.age=27
// console.log(emp);

 function Person(){

}
Person.prototype.test1=function(){
    console.log("test1");
}
Person.prototype.test2=function(){
    console.log("test2");
}
Person.prototype.test3=function(){
    console.log("test3");
}

// const person = new Person()
// console.log(person);

function Employee(name,age){
    this.name = name
    this.age = age
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.myTest = function(){
    console.log("MyTest");
}

const emp = new Employee("ömer",27)
emp.test2()