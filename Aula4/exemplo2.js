function tigrinho(){
    return Math.floor(Math.random()*10);
 
}

let sorteado = tigrinho()

switch(true){
    case sorteado > 3:
        console.log("Parabéns voce ganhou o premio maximo");
    case sorteado == 2:
        console.log (" voce ganhou uma caixa de leite") ;
    default:
        console.log ("ganhou nada");
}
