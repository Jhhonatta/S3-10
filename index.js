

function positions(firstPlace, secondPlace, lastPlace){
    let posicaoInicial = [firstPlace, secondPlace, lastPlace]
    
    if (posicaoInicial[0] == "Daniel"){
        return console.log("1º - Colocado " + posicaoInicial[0] +  " 2º - Colocado " + posicaoInicial[1] + " 3º - Colocado " + posicaoInicial[2])
    } else if (posicaoInicial[1] == "Daniel"){
        return console.log("1º - Colocado "  + posicaoInicial[1]  +  " 2º - Colocado " + posicaoInicial[0] + " 3º - Colocado " + posicaoInicial[2])
    } else{
        return console.log("1º - Colocado " + posicaoInicial[0] +  " 2º - Colocado " + posicaoInicial[2] + " 3º - Colocado " + posicaoInicial[1])
    }
    
    
}

positions("Manoel", "Daniel", "Rafael")


