const element = document.querySelector("#clear-todos")

//Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//Style ve Element Özelliklerini değiştirme
// element.className = "btn btn-primary"
// element.style.color = "#000"
// element.style.marginLeft = "50px"
// element.href = "https://www.google.com.tr"
// element.target = "_blank"
// element.textContent = "Silin"
// element.innerHTML = "<span style = 'color:green'>Silin</span>"

// const elements = document.querySelectorAll(".list-group-item") //Node list
// elements.forEach(function(el){
//     el.style.color = "red"
//     el.style.background = "#eee"
// })

let element2 = document.querySelector("li:last-child")
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelector("li:nth-child(3)")
element2 = document.querySelectorAll("li:nth-child(odd)")
element2 = document.querySelectorAll("li:nth-child(even)")

element2.forEach(function(el){
    el.style.background = "#ccc"
    el.style.color = "red"
})

console.log(element2);

// console.log(element.textContent);


//console.log(element);