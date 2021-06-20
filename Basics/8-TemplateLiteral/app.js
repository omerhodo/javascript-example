const name="ömer hodo"
const department="yazılım"
const salary="4000"

const a= `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`



// const html = "<ul>" +
//                 "<li>" + name + "</li>" +
//                 "<li>" + department + "</li>" +
//                 "<li>" + salary + "</li>" +
//                 "</ul>"



function b(){
    return "merhaba hodo"
}

const html2 = `
<ul>
    <li>${name}</li>
    <li>${salary}</li>
    <li>${department}</li>
    <li>${10 / 4}</li>
    <li>${b()}</li>
</ul>
`                

console.log(a)
document.write(html2)