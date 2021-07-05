const person = {
    age : 27,

    // tellAge : function(){

        // this = person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    tellAge : ()  => {
        console.log(this);
        console.log(this.age);
    }

    //this = window
}

person.tellAge()