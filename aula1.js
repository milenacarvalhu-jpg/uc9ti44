console.log("Olá mundo");

var nome = "Milena"
console.log("Olá " +nome);
// estou fazendo uma concatenação
console.log("Olá "+nome);

var idade = 24;
// estou fazendo uma interpolação
/*
'' - aspas
'' - apostrofe
`` - crease
*/
console.log(`Olá ${nome}, sua idade é ${idade}`);

//camalcase
var cestaCafe = [] // estou declarando um vetor
cestaCafe[0] = "café" // uma atribuição
cestaCafe[1] = "ovo"

//undercase
var cesta_cafe = ["café", "ovo]"];

cestaCafe.push("bacon");
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);

var nome = "Milena Nunes De Carvalho"
var idade =25
var telefone ="16996296499"

var dados = [];

dados[0] = nome;
dados[1] = idade;

dados.push(telefone);

console.log(dados);

//estrutura, dicionario, classe anonima
var usuario = {
    nome: "Milena Nunes De Carvalho",
    idade: 24,
    telefone: "16996296499"
}

console.log(usuario.idade);


// Criar uma lista telefonica 

var listatelefonica = [];

listatelefonica.push({
    nome: "Milena Nunes De Carvalho",
    telefone: "16996296499",
    endereco: "Rua jose"

});

listatelefonica.push({
    nome: "Pedro Manoel",
    telefone: "16996296499",
    endereco: "Rua Carlos"

});

console.log(listatelefonica);

// Listas de produtos nome, codigo, valor

var listasdeprodutos = [];

listasdeprodutos.push({
    nome: "armario",
    codigo: "3653",
    valor: 1.500
})

listasdeprodutos.push({
    nome: "geladeira",
    codigo: "12345",
    valor: 2.900
})

soma = listasdeprodutos[0].valor + listasdeprodutos[1].valor;
console.log("O valor é", soma);

//Listas de alunos 

var notasealunos =[]

notasealunos.push({
    nome: "Carlos",
    nota: 6
})

notasealunos.push({
    nome: "Carol",
    nota: 5
})

media =(notasealunos[0].nota + notasealunos[1].nota)/2
console.log ("A média é" ,media);