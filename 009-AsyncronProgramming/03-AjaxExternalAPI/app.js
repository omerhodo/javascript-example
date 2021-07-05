const btn = document.querySelector("#change")

btn.addEventListener("click",change)

function change(){

    const xhr = new XMLHttpRequest()

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=70181c0ab5d7c70dd22b31ab647d8c17")

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText)
            // console.log(this.responseText);
            const rate = response.rates.TRY
            const amount = Number(document.querySelector("#amount").value)
            document.querySelector("#tl").value = amount * rate
        }
    }

    xhr.send()
    
}