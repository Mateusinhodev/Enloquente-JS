/* INVERTENDO UM ARRAY */

function reverseArray(conjunto) {
    // Receberá um array como argumento e produzirá um novo array com a ordem inversa

    let novoConjunto = [];

    for(let i = conjunto.length - 1; i >= 0; i--) {
        novoConjunto.push(conjunto[i]);
    }

    console.log(novoConjunto);
}

function reverseArrayInPlace(conjunto) {
    // A diferença aqui é que não irá produzir um novo array

    // Percorre até a metade do Array
    for(let i = 0; i < Math.floor(conjunto.length / 2); i++) {
        // Indice do elemento espelhado
        let j = conjunto.length - 1 - i;

        // Armazena temporariamente o elemento da posição i
        let temp = conjunto[i];

        // Substitui o elemento da posicao i pelo elemento espelhado
        conjunto[i] = conjunto[j];

        // coloca o valor armazenado na posiçao do elemento espelhado
        conjunto[j] = temp;
    }

    console.log(conjunto);

}

reverseArray(["A", "B", "C"]);
reverseArrayInPlace([1, 2, 3, 4, 5])

// Invetendo utilizando o reverse()

const numeros = [1, 2, 3, 4, 5];

// console.log(numeros.reverse());