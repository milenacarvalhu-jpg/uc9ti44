let prompt = require("prompt-sync")()

let resposta = Math.floor(Math.random() * 10);
let numero = 9
let n = 3
tentativa = 0

while (numero != resposta && n > 0) {

    numero = Number(prompt("Digite um número: "))

    if (numero == resposta) {
        console.log("Parabéns, você acertou! ")
        break
    }
    else if (tentativa > 30) {
        console.log("SEM TENTATIVAS")
        console.log(resposta)
        break
    } else {
        console.log(`Você errou.. ${n - 1}`)

    }

    n--;

}