/*Atividade 06 Dada uma lista de strings, use a função filter para criar uma nova lista
contendo apenas as palavras que têm mais de 5 caracteres.*/

const frutas = ["Laranja", "Uva", "Banana", "Abacate", "Pêra", "Goiaba", "Maçã", "Graviola"]

function calcularMaiorQueCinco(arr) {
    const MaiorQueCinco = arr.filter(function(fruta) {
        return fruta.length > 5; 
    });
    return MaiorQueCinco; 
}


const resultado = calcularMaiorQueCinco(frutas);
console.log(resultado); 
document.querySelector("#demo").innerHTML = `As frutas que tem mais de cinco caracteres são:  ${resultado.join(", ")}.` 