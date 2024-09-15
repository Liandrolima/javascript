function circulo(raio) {
    const pi = Math.PI;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    
    return {
        area: area,
        perimetro : perimetro 
    };
}


const raio = 5;
const calcular = circulo(raio);

console.log(`Para um círculo com raio ${raio}:`);
console.log(`Área: ${calcular.area}`);
console.log(`Perímetro: ${calcular.perimetro }`);
