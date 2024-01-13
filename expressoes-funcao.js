
// DECLARAÇÃO DE FUNÇÃO
function minhafuncao(para) {
    //bloco de codigo 
}

//minhafuncao("para")

//EXPRESSÃO DE FUNÇÃO


//console.log(soma(2, 2));

// DIFERENÇA PRINCIPAL: HOISTING 
// funçoes e var são "listadas" no topo do arquivo

console.log (apresentar())

function apresentar () {
    return " Olá "
}

console.log(soma(2, 4))
const soma = function (num1, num2) { return num1 + num2; }