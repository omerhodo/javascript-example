function getTextFile(){ //Text Dosyası
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// getTextFile()

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// getJsonFile()

function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=70181c0ab5d7c70dd22b31ab647d8c17")
    .then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY)
    })
    .catch(err => console.log(err))
}

getExternalAPI()