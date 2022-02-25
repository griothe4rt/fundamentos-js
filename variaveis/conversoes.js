// tipo de dados e como trabalhar isso com os booleanos

// conversao implicita
const numero = 3;
const numeroString = "3";

console.log(numero == numeroString) // para conversão implicita utilizamos apenas 2 iguais ==

console.log(numero + numeroString) // quando utilizamos o + neste caso, estamos fazendo uma concatenação

// conversao explicita

// Number() | Quando queremos transformar uma string em um número

// Se tentarmos converter uma string com números e letras, como "456alura", teremos como resultado um erro NaN

// String() | Quando queremos transformar um número em uma string


console.log(numero + Number(numeroString)) // Aqui estamos fazendo uma conversão de string par número
