// Forma normal de escrever um console.log com string e variavel 

const nome = " Willian ";
const idade = 2024 - 1991
const cidadeDeNascimento = " São Paulo"

//const apresentacao = "Meu nome é "  + nome + " eu tenho " + idade + " anos de idade e nasci em " + cidadeDeNascimento;


// Usando a tamplate string, utilizando `crase em vez de " aspas duplas, e Usar $ {} para atribuir a variavel dentro da string
const apresentacao = `Meu nome é ${nome}, Minha idade é ${idade} anos, eu nasci em ${cidadeDeNascimento}`

console.log(apresentacao);