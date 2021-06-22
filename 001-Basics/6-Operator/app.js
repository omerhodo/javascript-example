let value

const value1=10
const value2=4

//Math Operators
value = value1 + value2
value = value1 - value2
value = value1 / value2
value = value1 * value2

value = Math.PI
value = Math.E

value = Math.round(3.1)
value = Math.round(3.5)
value = Math.round(5.499999999999999) // return 5
value = Math.round(5.4999999999999999) // return 6

value = Math.ceil(3.2) //Yukarı yuvarla
value = Math.ceil(3.9)

value = Math.floor(7.9) //Aşağı yuvarla

value = Math.sqrt(25) //Karekök alma
value = Math.sqrt(34)
value = Math.sqrt(10)

value = Math.abs(-10) //Mutlak değer alma

value = Math.pow(2,4) //Üst alma

value = Math.max(1,2,3,4,155,21,-222) //En büyük sayıyı döner
value = Math.min(1,2,3,4,155,21,-222,-222.1) // En küçük sayııy döner

value = Math.random() // Rastgele sayı döner
value = Math.random()*20
value = Math.floor(Math.random()*20+1) //1 ile 20 arasında sayı üretir


console.log(value);
