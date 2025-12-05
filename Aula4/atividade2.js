const input = require("../input");

(async()=>{

    console.log("1- X-Salada custa 12,00\n 2- X-burger custa 10,00 \n 3- Misto quente  custa 8,50 \n 4- Suco custa 6,00 \n 5- Refrigenrante custa 5,00 \n)")
    let codigoproduto = Number (await input())
    console.log("escolha a quantidade")
    let quantidade = Number (await input())

switch(codigoproduto){

    case 1:
        console.log("Você escolheu um X salada O valor a pagar é R$" +(12*quantidade));
        break;
    case 2:
        console.log ("Você escolheu um X burguer O valor a pagar é R$" +(10*quantidade));
        break;
    case 3:
        console.log ("Você escolheu um Cachorro quente O valor a pagar é R$" +(8.50*quantidade));
        break;
     case 4:
        console.log ("Você escolheu um Suco natural O valor a pagar é R$" +(6*quantidade));
        break;
     case 5:
        console.log ("Voce escolheu um Refrigerante O valor a pagar é R$" +(5*quantidade));
        break; 
            
    default:
        console.log (" nenhuma das opções anteriores.. Tente novamente!");
}

})()