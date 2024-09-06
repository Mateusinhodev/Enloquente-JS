/* JUNTANDO */

const arrayDeArrays = [[1, 2, 3], [4, 5], [6]];

const array = arrayDeArrays.reduce((acumulador, arrayAtual) => {
    return acumulador.concat(arrayAtual);
}, []);

console.log(array);