const input = require("../input");

(async()=>{
    console.log("1- X-Salada\n 2- X-Burguer\n 3- Misto quente\n 4- Suco Natural\n 5- Refrigenrante\n)")
    let opcao = Number (await input())
    

switch(opcao){

    case 1:
        console.log("Você ganhou um X salada ");
        break;
    case 2:
        console.log ("Você ganhou um X burguer");
        break;
    case 3:
        console.log ("Você ganhou um Misto quente");
        break;
     case 4:
        console.log ("Você ganhou um Suco natural");
        break;
     case 5:
        console.log ("Voce ganhou um Refrigerante");
        break; 
            
    default:
        console.log (" Opcão invalida.. Tente novamente ");
}


})()
