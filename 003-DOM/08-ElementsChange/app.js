//Replace

const cardbody = document.querySelectorAll(".card-body")[1]

const newElement = document.createElement("h3")
newElement.className = "card-title"
newElement.id = "tasks-title"
newElement.textContent = "Yeni Todolar"

console.log(newElement);

//Eski Element
const oldElement = document.querySelector("#tasks-title")

cardbody.replaceChild(newElement, oldElement)