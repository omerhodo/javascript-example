function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function(){
    console.log("İsim: "+ this.name + " Yaş: "+ this.age);
}

const emp1 = new Employee("ömer",27)
const emp2 = new Employee("mustafa",28)

emp1.showInfos()
console.log(emp1);
console.log(emp2);
