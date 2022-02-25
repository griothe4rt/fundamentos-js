// var | Funciona em qualquer parte do código | É carregada primeiro

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log("Versão com var:", area)
var area; // var pode ser criado depois do que você declarou

// let | É um pouco menos maleavel

let forma = "retângulo"
let altura2 = 6;
let comprimento2 = 8;
let area2;

if (forma === "retângulo") {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log("Versão com let:", area)

// const | Não pode ser alterado o valor

const forma2 = "quadrado"
const altura3 = 5;
const comprimento3 = 10;
let area3; // Como iremos mudar o valor, nao podemos usar const

if (forma2 === "quadrado") {
    area3 = altura3 * comprimento3;
} else {
    area3 = (altura3 * comprimento3) / 2;
}

console.log("Versão com const:", area3)