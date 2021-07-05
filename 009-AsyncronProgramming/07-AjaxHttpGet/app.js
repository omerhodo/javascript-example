//Ajax, callback, http request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    //Get Request

    get(url,callback){
        this.xhr.open("GET",url) //Bağlantı açık

        this.xhr.onload = function(){
            if (this.status === 200){
                callback(null,this.responseText);
            }
            else {
                callback("Bir hata oluştu...",null)
            }
        }

        this.xhr.send()
    }
}

const request = new Request()

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if (err === null){
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// })

request.get("https://jsonplaceholder.typicode.com/albums/53",function(err,response){
    if (err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
})