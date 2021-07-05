//HTTP STATUS
//200 : Ok
//403 : Forbidden
//404 : Not Found
//505 : Internal Server Error

const btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
    //XMLHttpRequest

    const xhr = new XMLHttpRequest()

    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         console.log(this.responseText);
    //     }
    // }

    // xhr.onprogress = function(){
    //     console.log("Process işleniyor...", this.readyState);
    // }

    xhr.onload = function(){
        if (this.status===200){
            document.querySelector("#ajax").textContent = this.responseText
        }
    }


    xhr.open("GET","example.txt",true)
    xhr.send()

})