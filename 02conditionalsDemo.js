const { Console } = require("console")

var sayi1=29
var sayi2=30
var sayi3=64

console.log("en büyük sayı:")
if (sayi1<sayi2 && sayi3<sayi2){
    console.log(sayi2)
}
else if(sayi3<sayi1 && sayi2<sayi1){
    console.log(sayi1)
}
else{
    console.log(sayi3)
}