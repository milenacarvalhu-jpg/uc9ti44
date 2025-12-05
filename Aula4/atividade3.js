const input = require("../input");

(async()=>{
    console.log("1- tamanho do combo P\n 2-tamanho do combo M\n 3- tamanho do combo G\n )")
    let tamanho = (await input())
    

switch(tamanho.toUpperCase()){

    case "P":
        console.log("Combo pequeno escolhido(R$15.00)");
        break;
    case "M":
        console.log ("Combo médio escolhido(R$20.00)");
        break;
    case "G":
        console.log ("Combo Grande escolhido(R$15.00)");
        break;
          
    default:
        console.log ("Tamanho inválido");
}

})()