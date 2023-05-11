const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissnigar = 0;

console.log("slumptaler: " + slumptal)

function gissaTal(){
    console.log("click")

    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");
    
    if (antalgissnigar < 3){
        if (slumptal === gissa_int){
            console.log("RÄTT! antalgissningar= $ (antalgissningar)");
            vinn = true;
            p_svar.innerHTML= "YOU ARE A WINNER!";
            antalgissnigar = 3;

        }
        else{
            console.log("FEL! antalgissningar= $(antalgissningar)");
            if (antalgissnigar === 2)
            p_svar.innerHTML="LOOSER!";
            
            else
           // svar.innerHTML= $(textfelt_gissa) är FEL! Gissning nr $(antalgissningar+1) av 3
            p_svar.innerHTML= (`${textfelt_gissa} är FEL! gissning nr ${antalgissningar+1} av 3`)
            
            document.getElementById("gissa").value="";
            document.getElementById(gissa).focus();
        }
        antalgissnigar++;

    }
    else{
        svar.innerHTML="LOOSER!";
    }
        

    console.log("textfelt=" + textfelt_gissa)
}