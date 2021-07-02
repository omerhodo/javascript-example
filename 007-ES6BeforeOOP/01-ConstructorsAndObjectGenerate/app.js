// console.log(this); //Global Scope

// const emp1 ={
//     name:"ömer",
//     age:27,
//     showInfos:function(){console.log("Bilgiler gösteriliyors");}
// }
// const emp2 ={
//     name:"hodo",
//     age:24
// }
// emp1.salary=3000

// console.log(emp1);


// function Employee(){ //Yapıcı Fonksiyon - Constructor
//     this.name = "ömer"
// }

// const date = new Date()
// const emp1 = new Employee()
// const emp2 = new Employee()
// console.log(emp1);
// console.log(emp2);


function Employee(name,age,salary){
    this.name = name;
    this.age = age
    this.salary = salary

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("ömer",27,4000)
const emp2 = new Employee("mustafa",28,5000)
const emp3 = new Employee("harun",29,6000)
const emp4 = new Employee("yılmaz",30,7000)

emp1.showInfos()
emp2.showInfos()
