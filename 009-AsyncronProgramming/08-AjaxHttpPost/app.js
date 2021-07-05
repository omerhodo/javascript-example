//Ajax, callback, http request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    //Post Request
    post(url,data,callback){
        this.xhr.open("POST",url)
        this.xhr.setRequestHeader("Content-type","application/json") //json verisi

        this.xhr.onload = () => {
            if (this.xhr.status === 201){
                callback(null,this.xhr.responseText)
            }
            else {
                callback("Bir hata oluştu",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"hodo"},function(err,album){
    if (err === null){
        console.log(album);
    }
    else {
        console.log(err);
    }
})