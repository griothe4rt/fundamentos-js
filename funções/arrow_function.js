// terceiro tipo de função

const apresentarArrow = nome => `O meu nome é ${nome}`;

// const soma = (num1, num2) => num1 + num2;

// sempre vem com um const e com o nome da variavel

// Arrow Function com mais de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if ((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)) {
        return num1 + num2
    } else {
        return "Somente somar números de 1 a 9."
    }
}

console.log(somaNumerosPequenos(10, 5))