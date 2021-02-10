function sayiUret(a=1150){
    return Math.ceil(Math.random()*a)
}

var sayi1= sayiUret(5)
var sayi2= sayiUret(6)
var sayi3= sayiUret()//default olarak 50 olacak
var sayi4= sayiUret(8)
var sayi5= sayiUret(9)
var sayi6= sayiUret(10)


// var sayi1= Math.ceil(Math.random()*49)
// var sayi2= Math.ceil(Math.random()*49)
// var sayi3= Math.ceil(Math.random()*49)
// var sayi4= Math.ceil(Math.random()*49)
// var sayi5= Math.ceil(Math.random()*49)
// var sayi6= Math.ceil(Math.random()*49)

console.log("kolon: " +sayi1 +" " +sayi2 +" " +sayi3 +" " +sayi4 +" " +sayi5 +" " +sayi6)