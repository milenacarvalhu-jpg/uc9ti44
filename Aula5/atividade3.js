const input = require("../input");

(async () => {
    
    let ale 
    let num 
    let i=0
    do{
        ale = Math.floor(Math.random() * 11);
        console.log("adivinhe que número é:");
        num = Number(await input());
        i++
    } while (ale != num && i< 10)
})();


