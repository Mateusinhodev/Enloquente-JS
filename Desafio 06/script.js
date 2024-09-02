/* Contando Feijões */

function countBs(texto) {

    let caracter = 'B';
    let contador = 0;
    
    for(let i = 0; i < texto.length; i++) {
       if(texto.charAt(i).toUpperCase() === caracter.toUpperCase()) {
            contador++
       }
    }

    return contador;
}

console.log(countBs('BBC'))

function countChar(texto2, letra) {
    let caracter = letra;
    let contador = 0

    for(let i = 0; i < texto2.length; i++) {
        if(texto2.charAt(i) === caracter) {
            contador++;
        }
    }

    return contador;
}

console.log(countChar('kakkerlak', 'k'))


/* CONCEITUANDO

===> charAt() - método em JavaScript é usado para retornar o caractere em um índice especificado (posição) dentro de uma string.
===> tOUpperCase() - retorna o valor da string convertida para maiúsculas.

*/
