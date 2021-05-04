function sayiUret(a=49){
    return Math.ceil(Math.random()*a)
}

var i=0
while(i<=5){
    console.log(sayiUret());
    i++
}

console.log("*********************")

for(var i=0;i<=6;i++){
    console.log(sayiUret());
}


console.log("*********************")

for(var k=0;k<8;k++){
    console.log(k+1 +". KOLON")
    for(var l=0;l<6;l++){
        console.log(sayiUret())
    }
}