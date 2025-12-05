function validarEmail(email) {
    // valida email com expressão regular simples
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefone(tel) {
    // aceita apenas números de 8 a 15 dígitos
    const regex = /^[0-9]{8,15}$/;
    return regex.test(tel);
}

module.exports = {
    validarEmail,
    validarTelefone
};
