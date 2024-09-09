/* DIFERENÇA DE IDADE ENTRE MÃE E FILHO */

const dados = [
    { nome: "Carolus Haverbeke", nascimento: 1832, mae: "Maria van Brussel" },
    { nome: "Emma de Milliano", nascimento: 1876, mae: "Carolus Haverbeke" },
    { nome: "Maria de Rycke", nascimento: 1683, mae: "Frederik de Rycke" },
    { nome: "Jan van Brussel", nascimento: 1714, mae: "Maria de Rycke" },
    { nome: "Philibert Haverbeke", nascimento: 1907, mae: "Emma de Milliano" },
    { nome: "Frederik de Rycke", nascimento: 1659, mae: null },
    { nome: "Pieter Haverbeke", nascimento: 1602, mae: null }
  ];

let byName = {}
dados.forEach(function(pessoa) {
    byName[pessoa.nome] = pessoa;
});

// Função filtrar pessoa com a mãe conhecida
function hasKnownMother(pessoa) {
    return byName[pessoa.mae] != null;
}

// Calcula a diferença de idade entre mãe e filho
var diferencaIdade = dados.filter(hasKnownMother).map(function(pessoa) {
    return pessoa.nascimento - byName[pessoa.mae].nascimento
});
 
// Cálcula a média das diferenças
function average(array) {
    function plus(a , b) { return a + b; }
    return array.reduce(plus) / array.length;
}

console.log(average(diferencaIdade));