//Ajax, callback, http request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    //Put Request
    put(url,data,callback){
        this.xhr.open("PUT",url)
        this.xhr.setRequestHeader("Content-type","application/json") //json verisi

        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else {
                callback("Put: Bir hata oluştu",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:7,title:"hodo"},function(err,album){
    if (err === null){
        console.log(album);
    }
    else {
        console.log(err);
    }
})