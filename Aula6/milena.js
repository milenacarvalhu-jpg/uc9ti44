function random(inferior=0, superior=1, tipo='float'){
    if(superior<inferior)
    {
        console
            .error("Numero superior deve ser maior que o numero");
        return;
    }

    switch(tipo){
        case 'float': 
            return Math.random()
                *(superior+1-inferior)+(inferior);
        case 'int': 
            return Math.floor(Math.random()
                *(superior+1-inferior))+(inferior);
    }   
}

function validaCPF(cpf){
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if(cpf.length !== 11) return false;

    // Elimina CPFs conhecidos como inválidos (ex: 00000000000, 11111111111, etc.)
    if (/^(\d)\1+$/.test(cpf)) return false;

    // ----- Valida 1º dígito -----
    let soma = 0;
    for(let i = 0; i < 9; i++){
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    if(digito1 === 10) digito1 = 0;
    if(digito1 != cpf[9]) return false;

    // ----- Valida 2º dígito -----
    soma = 0;
    for(let i = 0; i < 10; i++){
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    if(digito2 === 10) digito2 = 0;
    if(digito2 != cpf[10]) return false;

    return true;
}

module.exports = {
    random,validaCPF
}
