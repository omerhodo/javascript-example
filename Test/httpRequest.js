class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    get(url){
        this.xhr.open("GET",url)

        this.xhr.onload = function(){
            if (this.status === 200){
                console.log(this.responseText);
            }
            else{
                console.log("sorun var");
            }
        }

        this.xhr.send()
    }

    post(url,data){
        this.xhr.open("POST",url)
        this.xhr.setRequestHeader("Content-type","application/json")

        this.xhr.onload = function(){
            if (this.status===201){
                console.log(this.responseText);
            }
            else {
                console.log("değişmedi");
            }
        }

        this.xhr.send(JSON.stringify(data))
    }

    put(url,data){
        this.xhr.open("PUT",url)
        this.xhr.setRequestHeader("Content-type","application/json")

        this.xhr.onload = function(){
            if (this.status===200){
                console.log(this.responseText);
            }
            else{
                console.log("hata var");
            }
        }


        this.xhr.send(JSON.stringify(data))
    }

    delete(url){
        this.xhr.open("DELETE",url)

        this.xhr.onload = function(){
            if (this.status === 200){
                console.log("silindi");
            }
            else {
                console.log("silinmedi");
            }
        }

        this.xhr.send()
    }


}

const request = new Request()


request.get("https://jsonplaceholder.typicode.com/albums/")

// request.post("https://jsonplaceholder.typicode.com/posts/",{userId:24,title:"hodo",body:"3000"})

// request.put("https://jsonplaceholder.typicode.com/posts/24",{userId:24,title:"hodo",body:"3000"})

// request.delete("https://jsonplaceholder.typicode.com/posts/23")