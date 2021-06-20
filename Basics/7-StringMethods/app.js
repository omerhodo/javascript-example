let value;


const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Python, Java, C++";


value = firstName + lastName;
value =firstName + " " + lastName;

value = "omer" 

value+=" hodo"

value =firstName.length

value = firstName.concat(" ",lastName," ","Caz")

value = firstName.toLocaleLowerCase();
value = firstName.toLocaleUpperCase();

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("s");

value = firstName.charAt(2);
value = firstName.charAt(firstName.length - 1);

value = langs.split(",");

//değiştirir üzerine yazar
value = langs.replace("Python","CSS")

//includes (içerir mi?)
value = langs.includes("Java")
value = langs.includes("Ruby")

console.log(value);