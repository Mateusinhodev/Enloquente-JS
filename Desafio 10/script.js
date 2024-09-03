function deepEqual(a, b) {
    if (a === b) {
        return true; // Comparação direta para valores idênticos
    }

    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false; // Se um dos valores não for objeto ou for null, não são iguais
    }

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false; // Se tiverem diferentes números de propriedades, não são iguais
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false; // Se uma das propriedades for diferente, retorna false
        }
    }

    return true; // Todos os testes foram passados, os objetos são profundamente iguais
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));