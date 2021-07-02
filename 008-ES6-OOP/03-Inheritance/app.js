class Person{ //SuperClass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    showInfos(){
        console.log("İsim:" + this.name + " Yaş: " + age);
    }
}

class Employee extends Person { //DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){
        super(name,age) //Sadece extends olarak belirttiğimiz sınıfın constructor'ını yazarız
        this.salary = salary;
    }
    showInfos(){
        console.log("burası");
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary += amount
    }
}

const emp = new Employee("hodo",27,4000)

console.log(emp);
emp.showInfos()
emp.toString()
emp.raiseSalary(1000)
console.log(emp);