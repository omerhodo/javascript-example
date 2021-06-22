let value;

const now = new Date();

//console.log(now); //Şu anın zamanını verir

const date1 = new Date("11-10-1993 07:08:00:88")

const date2 = new Date("November 10 1993")

const date3 = new Date("11/10/1993")

value = date1
value = date1.getDate()
value = date1.getMonth()
value = date1.getDay()

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(3)
date1.setDate(3)
date1.setFullYear(1997)
date1.setHours(19)
date1.setMinutes(15)
date1.setSeconds(47)

value = date1 


console.log(value);