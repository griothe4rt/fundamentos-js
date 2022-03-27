const nome = "Lucas"
const idade = 2022-2001;
const cidadeDeNascimento = "São Paulo"

// Jeito que não é prático
//const apresentacao = "meu nome é " + nome + ", tenho " + idade + " anos. E nasci em " + cidadeDeNascimento;

// Template String

const apresentacao = `O meu nome é ${nome}, eu tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)