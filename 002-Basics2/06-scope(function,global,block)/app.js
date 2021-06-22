//Scope


//Global Scope

//-------------------------------

function a(){
    //Function Scope
}

//-------------------------------

if(a){
    //Block Scope
}

//-------------------------------

// var value1 = 10
// let value2 = 20
// const value3 = 30

// function Func(){
//     var value1 = 40
//     let value2 = 50
//     const value3 = 60

//     console.log(value1,value2,value3)
// }

// Func()
// console.log(value1,value2,value3)

if (true){
    var a= 10
    let b=20
    const c=30
    console.log(a,b,c);
}

console.log(a); //a değişkeni var ile tanımlandığı için block scope'ta var olmaya devam eder
// console.log(b);
// console.log(c);


// *** Eğer value1 adında bir değişken dışarıda oluşturulmuşsa block scope içinde let ya da const ile yine de değiştirilebilir. Ancak Global scopeda değişken yokken block scope içinde tanımlanamaz.

