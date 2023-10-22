/*
 ___________________________________
|          Data:21/10/2023          |
|           Jessica Nadia           |   
|            Desafio DIO            |
|___________________________________|

*/
const prompt = require("prompt-sync")({ sigint: true});

let wins = parseInt(get("Informe o Número de Vitorias"))
let losts = parseInt(get("Informe o Número de Derrotas"))
let rankeadas = (wins-losts)


function get (text) {
    let imput = prompt(text)
    return imput
}


if (rankeadas < 10) {
    console.log("O heroi tem saldo de " + rankeadas + " vitórias e está no nível Ferro")
}


else if (rankeadas >= 11 && rankeadas<=20) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Bronze")
}

else if (rankeadas >= 21 && rankeadas<=50) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Prata")
}

else if (rankeadas >= 51 && rankeadas<=80) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Ouro")
}

else if (rankeadas >= 81 && rankeadas<=90) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Diamante")
}

else if (rankeadas >= 91 && rankeadas<=100) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Lendário")
}

else if (rankeadas >= 101) {
    console.log("O hero tem saldo de " + rankeadas + " vitórias e está no nível Imortal")
}

else {
    console.log("Fora do range")
}
 