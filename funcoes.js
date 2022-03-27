// 1- PRIMEIRA FORMA
// DECLARAÇÃO DE FUNÇÃO

// 1 -> declara a função
                    //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2 -> executa a função (1 ou + vezes)

imprimeTexto("Oi, eu sou um texto!");

// três formas de escrever funções

function soma(){
    return 2 + 2; // return precisa ser a ultima linha da função | SEMPRE
}

// console.log(soma())

imprimeTexto(soma());