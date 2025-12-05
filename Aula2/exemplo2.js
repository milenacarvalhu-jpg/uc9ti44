// estou fazendo uma importação trazer funções externas
// para este arquivo
const input = require("../input");
//declarei uma variavel do tipo const chamada input 

(async () => {
   console.log("Qual é o seu nome? ");
  let nome = await input();

  console.log("Qual é a sua idade? ");
  let idade = await input();

  console.log(`Olá ${nome}, sua idade é ${idade}`);
})();