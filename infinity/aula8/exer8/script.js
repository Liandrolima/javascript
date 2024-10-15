/*Faça um progrma que pede para o usuário digitar sua senha, quando ele clicar no botão, percorra a senha e mostre na tela:
Quantas vogais
Quantas consoantes
Quantos números
Quantos caracteres especiais*/

const senha = document.querySelector("#senha");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

function checar() {
  let contador_vogais = 0;
  let contador_consoantes = 0;
  let contador_numeros = 0;
  let contador_especiais = 0;

  const vogais = "aeiouáàãâéèêíóôõú";
  const consoantes = "bcdfghjklmnpqrstvxywz";
  const numeros = "0123456789";

  for (let caracter_da_vez of senha.value.toLowerCase()) {
    if (vogais.includes(caracter_da_vez)) {
      contador_vogais++;
    } else if (consoantes.includes(caracter_da_vez)) {
      contador_consoantes++;
    } else if (numeros.includes(caracter_da_vez)) {
      contador_numeros++;
    } else {
      contador_especiais++;
    }
  }

  resultado.innerHTML = `
  <p>Número de vogais: ${contador_vogais}</p>
  <p>Número de consoantes: ${contador_consoantes}</p>
  <p>Número de numeros: ${contador_numeros}</p>
  <p>Número de especiais: ${contador_especiais}</p>
  `;
}

botao.addEventListener("click", checar);
