// boolean

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 -> o Javascript considera como false
// 1 -> o Javascript considera como true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// undefined

// null -> vazio ou nada

let minhaVar; // por padrão ganha o valor de undefined

let varNull = null; // quando foi criado, o null foi criado como Object, isso é um bug

console.log(minhaVar, varNull)

let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)