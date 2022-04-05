// declaração de função

function minhaFuncao() {
    //bloco de codigo
}

// expressão de função

const soma = function(numero1, numero2) {return numero1 + numero2}

console.log(soma(1, 1))

// Qual a diferança principal? HOISTING
// funções e var são "listadas" primeiro

console.log(apresentar())

function apresentar() {
    return "olá";
}