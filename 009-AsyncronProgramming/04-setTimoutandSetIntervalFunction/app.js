console.log(window);

const btn = document.querySelector("#btn")

//Set Timout

setTimeout(function(){
    console.log("naber");
},2000)

//Set Interval
let i = 0
let value = setInterval(() => {
    i++
    console.log(i);
}, 1000);

//Clear Interval
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value)
})


