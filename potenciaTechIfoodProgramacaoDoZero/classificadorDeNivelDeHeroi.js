/*

Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
 
 
 
Bons estudos 😉 */

/*
 ___________________________________
|          Data:21/10/2023          |
|           Jessica Nadia           |   
|            Desafio DIO            |
|___________________________________|

*/

let heroName = get("Informe o nome do Heroi");
let heroXp = get1("Informe o XP");

function get (text) {
    let resposta ="";
    while (resposta===""){
     resposta = prompt(text)
    return resposta}

}

function get1 () {
    let resposta1=""
    while (resposta1===""){
     resposta1 = prompt("Informe o XP")
    return resposta1 }

}

if (heroXp <1000) {

    console.log=("O Heroi de " + heroName + " está no nível Ferro")

}

if (heroXp >= 1001 && heroXp <= 2000) {

    console.log=("O Heroi de " + heroName + " está no nível Bronze")
}

if (heroXp >= 2001 && heroXp <= 5000) {

    console.log=("O Heroi de " + heroName + " está no nível Prata")
}

if (heroXp >= 6001 && heroXp <= 7000) {

    console.log=("O Heroi de " + heroName + " está no nível Ouro")
}

if (heroXp >= 7001 && heroXp <= 8000) {

    console.log=("O Heroi de " + heroName + " está no nível Platina")
}

if (heroXp >= 8001 && heroXp <= 9000) {

    console.log=("O Heroi de " + heroName + " está no nível Ascendente")
}

if (heroXp >= 9001 && heroXp <= 10000) {

    console.log=("O Heroi de " + heroName + " está no nível Imortal")
}

if (heroXp >= 10001) {

    console.log=("O Heroi de " + heroName + " está no nível Radiante")
}

else {
    console.log("O Heroi de " + heroName + " está no nível fora do range")
}