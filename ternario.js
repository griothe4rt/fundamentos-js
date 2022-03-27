const idadeMinina = 18;

const idadeCliente = 16;

if (idadeCliente >= idadeMinina) {
    console.log("Você pode beber!")
} else {
    console.log("Não vai poder beber não, doidão")
}

// com operador ternário (Uma boa pratica, é realizar quando são comparações mais curtas)

            //condição                      //primeira saida = True     //segunda saida = False
console.log(idadeCliente >= idadeMinina ? "Tá bom, você pode beber" : "Não vai beber não, maluquete")