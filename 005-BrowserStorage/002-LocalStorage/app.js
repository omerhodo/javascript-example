// Local Storage

// SetItem

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("hareket2", 50)

// const value = localStorage.getItem("hareket2")
// console.log(value);
// console.log(typeof value);

//Clear Local Storage

// localStorage.clear()

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("hareket2", 50)

// // console.log(localStorage.getItem("hareket"));

// if (localStorage.getItem("hareket")){
//     console.log("bu zaten var zaten var");
// }
// else{
//     console.log("eklenebilir");
// }


// Local Storage Array Yazma

// const todos = ["todo1","todo2","todo3"]

// localStorage.setItem("todos",todos)

// console.log(typeof localStorage.getItem("todos"));

// localStorage.setItem("todos", JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos"))
// console.log(value);


const form = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")

form.addEventListener("submit",addTodo)

function addTodo(e){
    const value = todoInput.value

    let todos

    if(localStorage.getItem("todos") === null){
        todos=[]
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(value)

    localStorage.setItem("todos", JSON.stringify(todos))

    e.preventDefault();
}