const input = require("../input"); // esta importando a função input para ser usada
(async () => {  //iniciando a função anonima asincrona
    let agenda = []; //declara um vetor vazio chamado agenda
    let continuar; //declara uma variave chamada continuar
    do { // inicia o meu laço

        console.log("digite um nome:") // escreve no terminal o texto dentro das aspas
        let nomeE = await input(); // le do terminal e salva na variavel elegivel chamada NomeE

        console.log("digite um telefone:") // escreve no terminal o texto dentro das aspas
        let teLE = await input(); // le do terminal e salva na variavel elegivel chamada NomeE

        let telE = await input(); // le do terminal e salva na variavel elegivel chamada telE
        agenda.push({  //chama a função nativa do vetor que coloca o elemento na ultima posição
            nome: nomeE,
            telefone: teLE
    
        });

        console.log("deseja continuar? (sim)")   // escreve no terminal o texto dentro das aspas
        continuar(await input()).toLowerCase(); // le do terminal, deixa tudo minsuculo e salva na variavel elegivel chamada continuar


    } while (agenda.length <= 5 && continuar == "sim") //enquanto a agenda tiver menos ou 5 elementos o programa continua e a pessoa escreve que quer continuar
    console.log(agenda) //escreve no terminal a minha


})();