/*function fatorial(n) {
    if (n < 0) {
        return 'Indefinido!'; // Factorial is not defined for negative numbers
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let res = fatorial(4);
console.log(res); */

/*function fatorial(n) {
    if (n < 0) {
        return 'Indefinido'; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1! = 1
    }
    return n * fatorial(n - 1); // Recursive case
}

let res = fatorial(6);
console.log(res); // Output: 120*/

function fatorial(n) {
    if (n < 0) {
        return 'Indefinido'; // Factorial is not defined for negative numbers
    }
    let result = 1;
    let sequence = `${n}! = `;
    for (let i = n; i > 0; i--) {
        result *= i;
        sequence += i;
        if (i > 1) {
            sequence += 'x';
        }
    }
    console.log(sequence); // Log the sequence
    return result;
}

let res = fatorial(7);
console.log(res); // Output: 120

