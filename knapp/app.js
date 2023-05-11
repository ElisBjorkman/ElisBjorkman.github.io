

let siffra = 0;

function plusClick() {
    
    siffra = siffra + 1
    document.getElementById("svar").innerHTML = siffra
}

function minusClick() {
    
    siffra = siffra - 1
    document.getElementById("svar").innerHTML = siffra
}

const minusknapp = document.getElementById("minusclick")
minusknapp.addEventListener("click", minusclick)

function minusclick() {
    siffra = siffra - 2
    document.getElementById("svar").innerHTML = siffra
}