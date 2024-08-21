// Minimo

const prompt = require('prompt-sync')();

function retornandoNumeroMinimo() {
    const num1 = prompt('Digite um número? ');
    const num2 = prompt('Digite um número? ');

    const minimo = Math.min(num1, num2);

    console.log(`O minimo entre os valores digitado é: ${minimo}`)
}

retornandoNumeroMinimo();

// console.log(Math.min(2, 4));