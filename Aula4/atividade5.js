const input = require("../input");

(async()=>{

    console.log("\n Qual a quantidade de pontos do cliente (pontos)? \n ")
    let cliente = Number (await input())

switch(true){

    case cliente>=100:
        console.log("cliente iniciante");
        break;
    case cliente>=100 && pontos <300:
        console.log ("cliente bronze");
         break;
    case totalCompra>=300 && pontos <700:
        console.log ("cliente prata");
         break;
        
    case totalCompra>=700:
        console.log ("cliente ouro");
         break;
       
    default:
        console.log ("direito a um combo gratis por mês");
}        
    
})();