
const input = require("../input");



(async () =>{
    let saldo =300
    console.log(" ⭐ Bem-vindo ao conradito's Bank 🏦")
    console.log(" Digite 1 para depositar ou 2 para sacar: ")
    let resposta = await input();

    console.log("💵 digite o valor de depósito: ") 
    let valor = Number( await input())

    if( resposta == "1" ){ // Depósito
        
        if(valor >=1){
            saldo += valor
    }else{
        console.log("O valor minímo deve ser R$ 1")

    }
    }



    if( resposta == "2" ){ // saque
        console.log ("O valor do saque {valor}" )
        if(saldo>=valor){
            saldo -= valor
            
    }else{
        console.log ("O valor tem que ser menor ou igual ao saldo" )

    }
    }

         //console.log(" Operação realizada com sucesso!")
         console.log(`valor atual na conta: R$ ${saldo}`)  


})();

