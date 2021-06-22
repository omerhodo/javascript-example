let value;

const numbers = [32,43,23,12,5,32];

const numbers2 = new Array(1,2,3,4,5,6)

const langs= ["Python","java","c++","javascript"]

const a=["merhaba", 22,null,undefined,3.14]

value =numbers.length

value = numbers[0]
value = numbers[1]
value = numbers[2]
value = numbers[3]
value = numbers
value = numbers[numbers.length - 1] //son eleman



value = numbers.indexOf(32) //hangi indexte

numbers.push(2323) //sona değer ekle
value = numbers[numbers.length - 1] //son eleman

numbers.unshift(1023) //başına değer ekle
value = numbers[0]

numbers.pop() //son değeri çıkar
value = numbers[numbers.length - 1]


numbers.shift() //ilk değeri çıkar
value = numbers

numbers.splice(0,3) //belli kısmı çıkarma
value = numbers

numbers.reverse()
value = numbers


value = numbers.sort() //sıralama yapar ama ilk değere göre

value = numbers.sort(function(x,y){ //küçükten büyüğe sıralama
    return x-y
})

value = numbers.sort(function(x,y){ //büyükten küçüğe sıralama
    return y-x
})

console.log(value);