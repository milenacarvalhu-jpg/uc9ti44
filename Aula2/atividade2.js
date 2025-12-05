const input = require("../input");

(async () => {

    console.log("Digite o primeiro número? ");
   let primeironumero = Number (await input());
 
   console.log("Digite o segundo número? ");
   let segundonumero = Number (await input());
 
 
   console.log(`A soma entre ${primeironumero} + ${segundonumero} = ${primeironumero+segundonumero} `);
 
})();