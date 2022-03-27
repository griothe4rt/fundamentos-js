// parametros de função

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade} anos.`
}

console.log(nomeIdade("Lucas", 20))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(5, 2)) // -> informar os parametros
console.log(soma(50, 20)) // -> informar os parametros
console.log(soma(6, 3)) // -> informar os parametros

function multiplica(numero1 = 1, numero2 = 1) { //definindo parametros padrao
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))