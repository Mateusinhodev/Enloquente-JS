/* O HISTÓRICO DA EXPECTATIVA DE VIDA */

// Dados de exemplo
let dados = [
    { nome: "Pessoa 1", nascimento: 1832, morte: 1905 },
    { nome: "Pessoa 2", nascimento: 1705, morte: 1785 },
    { nome: "Pessoa 3", nascimento: 1601, morte: 1680 },
    { nome: "Pessoa 4", nascimento: 1920, morte: 2010 },
    { nome: "Pessoa 5", nascimento: 1980, morte: 2074 }
  ];

// Função para calcular a média de um array de números

function media(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

// Função que agrupa as pessoas por século

function agruparPorSeculo(data) {
    let grupos = {}; // Objeto que vai guardar as pessoas por século

    data.forEach(pessoa => {
        let seculo = Math.ceil(pessoa.morte / 100); // Calcula o século
        if(!grupos[seculo]) { // Seo século ainda não existir, cria um array para ele
            grupos[seculo] = [];
        }
        grupos[seculo].push(pessoa.morte - pessoa.nascimento);
    });

    return grupos;
}

// Função para calcular a idade média por século e exibir
function idadeMediaPorSeculo(data) {
    let grupos = agruparPorSeculo(data); // Agrupa as pessoas por século
    for(let seculo in grupos) {
        console.log(seculo + ": " + media(grupos[seculo]).toFixed(1)); // Calcula e mostra a média
    }
}

// Chama a função para calcular e mostar a média de idades por século.
idadeMediaPorSeculo(dados)