//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>


const newLink = document.createElement("a")
const cardbody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos"
newLink.className = "btn btn-danger"
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"


//Text Content !!İçeriği temizler ve sonra ekler
//newLink.textContent = "Tüm Taskları Temizleyin"

// cardbody.textContent = "sadasdasd"
// console.log(cardbody)


//Text Node
// const text = document.createTextNode("Naber")
// cardbody.appendChild(text)
// console.log(cardbody)

newLink.appendChild(document.createTextNode("Farklı sayfaya git"))
cardbody.appendChild(newLink)

console.log(newLink)