const notas = [10, 7, 9, 5, 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A sua média é ${media}`)