let value

//data type convert to string

value = String(10)
value = String(3.14)
value = String(true)
value = String(false)
value = String([1,2,3,4])
value = String(function(){console.log("hey"); })

value = (10).toString()
value = (3.84).toString()

//

value = Number("123")
value = Number(null)
value = Number(undefined) //NaN not a number
value = Number("Hello world!") 
value = Number(function(){console.log("hey"); })
value = Number([1,2,3,4])
value = Number("3.14")

console.log(value)
console.log(typeof value)

value = parseFloat("3.41415")
value = parseInt("3.41415")

const a = "Hello" + 34
console.log(a);
console.log(typeof a)

const b = Number("43") + 34
console.log(b);
console.log(typeof b)
