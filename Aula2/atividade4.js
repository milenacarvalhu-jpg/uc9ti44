const input = require("../input");

(async () => {

    console.log("Digite um número? ");
   let numero = Number (await input());
 
   console.log(`o dobro é  ${numero*2} `);
 
})();
