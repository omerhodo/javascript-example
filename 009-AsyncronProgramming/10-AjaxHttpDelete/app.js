//Ajax, callback, http request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    //Delete Request
    delete(url,callback){
        this.xhr.open("DELETE",url) //Bağlantı açık

        this.xhr.onload = function(){
            if (this.status === 200){
                callback(null,"Veri başarıyla silindi");
            }
            else {
                callback("Delete: Bir hata oluştu...",null)
            }
        }

        this.xhr.send()
    }
}

const request = new Request()

request.delete("https://jsonplaceholder.typicode.com/albums/53",function(err,response){
    if (err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
})