class Pengar {
constructor(antal, pengarsort) {
    this.antal = antal
this.pengarsort = pengarsort
}

}

/**
 * exChange
 * in: belop som ska växlas, valör på sedel
 * out antal sedlar eller mynt
 */


function exChange(belop, sedel){
    return Math.floor(belop / sedel)
}

/**
 * getExchangeArray()
 * inbetalat belop
 * out: array innehåller antal mynt i varje valör
 */

function getExchangeArray(inbetalning, priset){
    let antal_mynt = 0
let pengar_tilbaka

sedlar_mynt_array = []

//500----------------------
pengar_tilbaka = inbetalning - priset
antal_mynt = exChange(pengar_tilbaka, 500)

console.log(`antal= ${antal_mynt}`)


}




const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")

const svar_div = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener('click', kalkyleraClick)

function kalkyleraClick(e){

    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.valur)


    getExchangeArray(t_inbet, t_pris)
    
    //console.log(`Click`)
}
