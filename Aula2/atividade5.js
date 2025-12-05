const input = require("../input");

(async () => {
    console.log ("Digite uma frase");
    let frase = await input();

   console.log(`Sua frase tem: ${frase.length} caracteres.`);
   
})();

