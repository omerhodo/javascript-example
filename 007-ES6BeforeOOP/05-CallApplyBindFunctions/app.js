//Call Apply Bind

const obj1 = {
    number1:30,
    number2:40
}

const obj2 = {
    number1:44,
    number2:33
}

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers(100,200)

//Call
// addNumbers.call(obj2,100,200)

//Apply
// addNumbers.apply(obj1,[100,200])

//Bind
function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4
}

const copyFunc1 = getNumbersTotal.bind(obj1)
const copyFunc2 = getNumbersTotal.bind(obj2)

// console.dir(copyFunc2);

console.log(copyFunc1(200,300));