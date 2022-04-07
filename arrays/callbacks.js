const nomes = ['Ana', 'Juliana', 'Leonardo', 'Lucas']

const notas = [5, 10, 8, 9]

let listaDeNotasEAlunos = [nomes, notas]

// --------> Valida se nome tá dentro da array
// function chamaNome(nome) {
//     if (nomes.includes(nome)) {
//         return `Olá ${nome}`
//     } else {
//         return "Desculpe, não sei de quem você está falando."
//     }
// }

// console.log(chamaNome('Teste'))
// console.log(chamaNome('Lucas'))
// console.log(chamaNome('Ana'))


//faz looping repetindo valores da array
nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome)
}