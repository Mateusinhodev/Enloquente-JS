/* A LISTA */

// Função arrayToList: Converte um array em uma lista encadeada

function arrayToList(array) {

    let list = null;

    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
}

// Função listToArray: Converte uma lista encadeada em um array

function listToArray(list) {
    let array = [];
    let current = list;

    while (current !== null) {
        array.push(current.value);
        current = current.rest;
    }

    return array;
}

// Função prepend: Adiciona um elemento no início de uma lista encadeada

function prepend(value, list) {
    return { value: value, rest: list};
}

// Função nth: Retorna o elemento na posição especificada (recursiva)

function nth(list, n) {
    if (list === null) {
        return undefined;
    }
    
    if (n === 0) {
        return list.value;
    }

    return nth(list.rest, n-1);
}

// Testes

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
