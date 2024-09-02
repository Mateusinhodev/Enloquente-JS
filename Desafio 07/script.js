/* A SOMA DE UM INTERVALO */

const numeros = [];

function range(start, end, salto) {

    if(start > end ) {  
        if(salto == undefined) {
            for(let i = start; i >= end; i--) {
                numeros.push(i)
            }
        } else {
            for(let i = start; i >= end; i-=salto) {
                numeros.push(i)
            }
        }
        
    } 
    
    if(salto == undefined) {
        for(let i = start; i <= end; i++) {
            numeros.push(i)
        }
    } else {
        for(let i = start; i <= end; i += salto) {
            numeros.push(i)
        }
    } 

    console.log(numeros);
}

function sum() {
    let total = 0;
    numeros.forEach(function(numero) {
        total += numero;
        // console.log(total);
    }) 

    return `A soma do intervalo do Array é de ${total}`
}

range(10, 1, 2)
console.log(sum())