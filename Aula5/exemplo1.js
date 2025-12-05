// Aula de laço repetições

let contador = 0
let continuar_loop = true // bool

while(continuar_loop == true){ 
    contador++ // Aumenta o valor da variávell em exatamente 1
    //console.log("Olá, boa noite! Repitiu "+contador+" vezes")

    if(contador == 1000000){
        console.log("Aeeee passou um 🌽")
        continuar_loop = false
       ///break
    }
}
   