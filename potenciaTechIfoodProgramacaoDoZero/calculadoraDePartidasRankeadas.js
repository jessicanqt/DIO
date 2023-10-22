/*
 ___________________________________
|          Data:21/10/2023          |
|           Jessica Nadia           |   
|            Desafio DIO            |
|___________________________________|

*/

/*
 ___________________________________
|          Data:21/10/2023          |
|           Jessica Nadia           |   
|            Desafio DIO            |
|___________________________________|

*/

let wins = get("Informe o Número de Vitorias")
let losts = get("Informe o Número de Derrotas")

function get (text) {
    
    let imput = prompt(text)

    return imput
}

function rankeadas (wins,losts) {
    let resultRankeadas = wins - losts
    return resultRankeadas
}

rankeadas()

if (resultRankeadas < 10) {
    console.log("O heroi tem saldo de " + resultRankeadas + " vitórias e está no nível Ferro")
}


if (resultRankeadas >= 11 && resultRankeadas<=20) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Bronze")
}

if (resultRankeadas >= 21 && resultRankeadas<=50) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Prata")
}

if (resultRankeadas >= 51 && resultRankeadas<=80) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Ouro")
}

if (resultRankeadas >= 81 && resultRankeadas<=90) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Diamante")
}

if (resultRankeadas >= 91 && resultRankeadas<=100) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Lendário")
}

if (resultRankeadas >= 101) {
    console.log("O hero tem saldo de " + resultRankeadas + " vitórias e está no nível Imortal")
}

else {
    console.log("Fora do range")
}
