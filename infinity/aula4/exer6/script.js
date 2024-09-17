function contarCaracteres(senha) {
    const vogais = "aeiouAEIOU";
    const numeros = "0123456789";
    const especiais = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    
    let contagemVogais = 0;
    let contagemConsoantes = 0;
    let contagemNumeros = 0;
    let contagemEspeciais = 0;

    for (let caractere of senha) {
        if (vogais.includes(caractere)) {
            contagemVogais++;
        } else if (caractere.match(/[a-zA-Z]/)) { 
            contagemConsoantes++;
        } else if (numeros.includes(caractere)) {
            contagemNumeros++;
        } else if (especiais.includes(caractere)) {
            contagemEspeciais++;
        }
    }

    return {
        vogais: contagemVogais,
        consoantes: contagemConsoantes,
        numeros: contagemNumeros,
        especiais: contagemEspeciais
    };
}

// Solicita a senha ao usuário
const senha = prompt("Digite a senha:");

// Conta os caracteres
const resultado = contarCaracteres(senha);

// Exibe os resultados
console.log(`Vogais: ${resultado.vogais}`);
console.log(`Consoantes: ${resultado.consoantes}`);
console.log(`Números: ${resultado.numeros}`);
console.log(`Caracteres Especiais: ${resultado.especiais}`);


//const senha = prompt("Digite sua senha: ")

//let cont_vogais = 0
//let cont_consoantes = 0
//let cont_numeros = 0
//let cont_caracteres_especiais = 0

//const vogais = "aeiouáàãâéêèíóôõúü"
//const consoantes = "bcdfghjklmnpqrstvxywz"
//const numeros = "0123456789"

//for(let caracter_da_vez of senha.toLowerCase()){

    //if(vogais.includes(caracter_da_vez)){
        cont_vogais++
    //}else if(consoantes.includes(caracter_da_vez)){
        cont_consoantes++
    //}else if(numeros.includes(caracter_da_vez)){
        cont_numeros++
    //}else{
        cont_caracteres_especiais++
    //}
    
//}
//document.write(`
    //A palavra tem ${cont_vogais} vogais <br>
    //A palavra tem ${cont_consoantes} consoantes <br>
    //A palavra tem ${cont_numeros} números <br>
    //A palavra tem ${cont_caracteres_especiais} caracteres especiais
    //`)

