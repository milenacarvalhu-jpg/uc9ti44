const input = require("../input");

(async () => {
    
    const input = require("../input");

    (async () => {

        let agenda = [];
        let continuar; ("sim!")
        do {
            console.log("Digite um nome:") 
                let nomeE = await input();

            console.log("Digite um telefone:")
            let telE = await input();


            console.log("Digite um email:")
            let emailE = await input();

            agenda.push(
                {
                    nome: nomeE,
                    telefone: telE,
                    email: emailE
                }
            );

            console.log("Dseja continuar? (sim)")
            continuar = (await input()).toLowerCase();

        } while (agenda.length <= 5 && continuar == "sim")
    })();

})();