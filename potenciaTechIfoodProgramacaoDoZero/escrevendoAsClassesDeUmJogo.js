/*
 ___________________________________
|          Data:21/10/2023          |
|           Jessica Nadia           |   
|            Desafio DIO            |
|___________________________________|

*/

const prompt = require("prompt-sync")({ sigint: true});


let type = get('Informe o tipo do heroi :');
let idade = get("Informe  a idade :");

atacar ()


function get (message) {
    info = prompt(message)
    return info
}


class NextAdventure {

    constructor(nome,idade,tipo) {
    this.nome=nome;
    this.idade=idade;
    this.tipo=tipo;
    }  
}

// Verifica qual o tipo de ataque de acordo com o Heroi

function atacar (tipo) {
    tipo = type
    if (tipo==="mago") {
    
        attack="usou Magia"
        
        }
        
        else if(tipo==="gerreiro") {
            attack="Usou Espada"
        }
        
        else if (tipo==="monge") {
            attack="Usou Artes Marciais"
        }
        
        else if (tipo==="ninja") {
            attack="Usou Shuriken"
        }
        
        else {

            attack="tipo de heroi nao encontrado"
        }
        
    console.log(`O ${type} atacou usando ${attack}`)

}

