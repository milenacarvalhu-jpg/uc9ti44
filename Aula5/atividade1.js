const input = require("../input");

(async () => {
    do{
        console.log("Deseja continuar: (sim)")
        var continuar = await input();
    }while(continuar == "sim")
 })();