//Element Id'ye göre seçme

let element

element = document.getElementById("todo-form") //getElementById ile element seçimi yapıyoruz
element = document.getElementById("tasks-title")

//Element Class'a göre seçme
element = document.getElementsByClassName("d-flex")
element = document.getElementsByClassName("list-group-item")
element = document.getElementsByClassName("card-header")

//Elemnt Tag'e göre seçme
element = document.getElementsByTagName("div")

//Query Selector - Css Selector - tek bir element
element = document.querySelector("#todo-form") //id'ye göre seçmek için başına # (ilk'ini seçer)
element = document.querySelector("#tasks-title")

element = document.querySelector(".list-group-item") //class'a göre seçmek için başına nokta
element = document.querySelector("li")
element = document.querySelector("div")

//Query Selector All - Tüm elementleri seçme
element = document.querySelectorAll(".list-group-item")
element.forEach(function(el){
    console.log(el);
})

//console.log(element);