//Dinamik element silme

const todoList = document.querySelector("ul.list-group")
const todos = document.querySelectorAll("li.list-group-item")

//Remove Methods
// todos[0].remove()

//Remove Child
// todoList.removeChild(todoList.lastElementChild)
todoList.removeChild(todos[2])


console.log(todos);
console.log(todoList)