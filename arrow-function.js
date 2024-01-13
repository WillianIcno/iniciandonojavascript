function apresentar (nome) {
    return `Meu nome é ${nome} ` 
}

// Arrow Function 
const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2 ;

// Arrow Function com mais de uma linha de instrução ( código )

const somaNumerosPequenos = (num1 , num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de um a nove" 
    }   else {
        return num1 + num2;
    } 
}

// Hoisting arrow function se comporta da mesma forma 