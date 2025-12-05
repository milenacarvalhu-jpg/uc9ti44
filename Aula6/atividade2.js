const input = require("../input");
const {validaCPF} = require("./milena")

(async () => {
    console.log("Digite um cpf: "); 
    let cpf = await input();

    if(validaCPF(cpf)){
        console.log("esse cpf é valido")
    }else{ 
        console.log("esse cpf é invalido")
    }

})();