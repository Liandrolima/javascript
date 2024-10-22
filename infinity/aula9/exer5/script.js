const senha = document.querySelector("#senha");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  let tem_8_digitos = 0;
  let tem_maiscula = 0;
  let tem_minuscula = 0;
  let tem_numero = 0;
  let tem_especial = 0;

  const alfabeto = "abcdefghijklmnopqrstuvxywzç";
  const numeros = "0123456789";

  if (senha.value.length >= 8) {
    tem_8_digitos = 1;
  }

  for (let caracter_da_vez of senha.value) {
    if (alfabeto.includes(caracter_da_vez)) {
      tem_minuscula = 1;
    } else if (alfabeto.toUpperCase().includes(caracter_da_vez)) {
      tem_maiscula = 1;
    } else if (numeros.includes(caracter_da_vez)) {
      tem_numero = 1;
    } else {
      tem_especial = 1;
    }
  }
  total_requisitos =
    tem_8_digitos + tem_especial + tem_maiscula + tem_minuscula + tem_numero;

  if (total_requisitos <= 2) {
    resultado.textContent = "Senha fraca";
    resultado.style.color = "red";
  } else if (total_requisitos <= 4) {
    resultado.textContent = "Senha média";
    resultado.style.color = "#ffc144";
  } else {
    resultado.textContent = "Senha forte";
    resultado.style.color = "green";
  }
});

/*dblclick
click
mouseover
mouseout
keydown
keyup

const senha = document.querySelector("#senha");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

senha.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    let tem_8_digitos = 0;
    let tem_maiscula = 0;
    let tem_minuscula = 0;
    let tem_numero = 0;
    let tem_especial = 0;
  
    const alfabeto = "abcdefghijklmnopqrstuvxywzç";
    const numeros = "0123456789";
  
    if (senha.value.length >= 8) {
      tem_8_digitos = 1;
    }
  
    for (let caracter_da_vez of senha.value) {
      if (alfabeto.includes(caracter_da_vez)) {
        tem_minuscula = 1;
      } else if (alfabeto.toUpperCase().includes(caracter_da_vez)) {
        tem_maiscula = 1;
      } else if (numeros.includes(caracter_da_vez)) {
        tem_numero = 1;
      } else {
        tem_especial = 1;
      }
    }
    total_requisitos =
      tem_8_digitos + tem_especial + tem_maiscula + tem_minuscula + tem_numero;
  
    if (total_requisitos <= 2) {
      resultado.textContent = "Senha fraca";
      resultado.style.color = "red";
    } else if (total_requisitos <= 4) {
      resultado.textContent = "Senha média";
      resultado.style.color = "#ffc144";
    } else {
      resultado.textContent = "Senha forte";
      resultado.style.color = "green";
    }
  }
});

const senha = document.querySelector("#senha");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

senha.addEventListener("input", (evento) => {
  console.log(evento.target.value);
  let tem_8_digitos = 0;
  let tem_maiscula = 0;
  let tem_minuscula = 0;
  let tem_numero = 0;
  let tem_especial = 0;

  const alfabeto = "abcdefghijklmnopqrstuvxywzç";
  const numeros = "0123456789";

  if (senha.value.length >= 8) {
    tem_8_digitos = 1;
  }

  for (let caracter_da_vez of senha.value) {
    if (alfabeto.includes(caracter_da_vez)) {
      tem_minuscula = 1;
    } else if (alfabeto.toUpperCase().includes(caracter_da_vez)) {
      tem_maiscula = 1;
    } else if (numeros.includes(caracter_da_vez)) {
      tem_numero = 1;
    } else {
      tem_especial = 1;
    }
  }
  total_requisitos =
    tem_8_digitos + tem_especial + tem_maiscula + tem_minuscula + tem_numero;

  if (total_requisitos <= 2) {
    resultado.textContent = "Senha fraca";
    resultado.style.color = "red";
  } else if (total_requisitos <= 4) {
    resultado.textContent = "Senha média";
    resultado.style.color = "#ffc144";
  } else {
    resultado.textContent = "Senha forte";
    resultado.style.color = "green";
  }
});
*/