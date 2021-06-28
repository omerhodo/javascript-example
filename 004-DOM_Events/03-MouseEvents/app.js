const cardbody = document.querySelectorAll(".card-body")[1]

const title = document.querySelector("#tasks-title")

//Click Event
// title.addEventListener("click",run)

//DoubleClick Event
// title.addEventListener("dblclick",run)

//MouseDown Event
// title.addEventListener("mousedown",run)

//MouseUp Event
// title.addEventListener("mouseup",run)

//MouseOver Event
// title.addEventListener("mouseover",run)

//MouseOut Event
// title.addEventListener("mouseout",run)

// cardbody.addEventListener("mouseover",run)
// cardbody.addEventListener("mouseout",run)

//MouseEnter and MouseLeave

cardbody.addEventListener("mouseenter",run)
cardbody.addEventListener("mouseleave",run)

function run(e){
    console.log(e.type);
}
