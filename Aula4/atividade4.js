const input = require("../input");

(async()=>{

    console.log("\n Qual o valor da compra (totalCompra)? \n ")
    let totalCompra = Number (await input())

switch(true){

    case totalCompra>=100:
        console.log("Desconto de 20% aplicado.");
        valortotal = totalCompra *0.8;
        break;
    case totalCompra>=50 && totalCompra <100:
        console.log ("Desconto de 10% aplicado.");
        valortotal = totalCompra *0.9;
        break;
    case totalCompra>=20 && totalCompra <50:
        console.log ("Desconto de 5% aplicado.");
        valortotal = totalCompra *0.95
        break;
       
    default:
        console.log ("Sem desconto valor muito baixo.");
}
    console.log ("valor final é igual a "+valortotal);

})()