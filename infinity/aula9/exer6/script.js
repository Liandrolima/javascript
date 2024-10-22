const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const error = document.querySelector("#error");
const formulario = document.querySelector("#formulario");

nome.addEventListener("click", () => {
  error.textContent = "";
});

idade.addEventListener("click", () => {
  error.textContent = "";
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (nome.value && idade.value) {
    const caixinha = document.createElement("div");
    caixinha.className = "card";

    const h2Nome = document.createElement("h2");
    h2Nome.textContent = `Nome: ${nome.value}`;

    const pIdade = document.createElement("p");
    pIdade.textContent = `Idade: ${idade.value}`;

    caixinha.append(h2Nome, pIdade);
    resultado.appendChild(caixinha);

    formulario.reset();
    nome.focus()
  } else {
    error.textContent = "Preencha todos os campos.";
  }
});



/*USANDO BOTÃO DENTRO DO SUBMIT


const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const error = document.querySelector("#error");
const formulario = document.querySelector("#formulario");

nome.addEventListener("click", () => {
  error.textContent = "";
});

idade.addEventListener("click", () => {
  error.textContent = "";
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (nome.value && idade.value) {
    const caixinha = document.createElement("div");
    caixinha.className = "card";

    const h2Nome = document.createElement("h2");
    h2Nome.textContent = `Nome: ${nome.value}`;

    const pIdade = document.createElement("p");
    pIdade.textContent = `Idade: ${idade.value}`;

    const botaoCumprimentar = document.createElement("button");
    botaoCumprimentar.textContent = "Clique em mim";

    botaoCumprimentar.addEventListener("click", () => {
      alert(`Oi ${h2Nome.textContent} você sabe ler`);
    });

    caixinha.append(h2Nome, pIdade, botaoCumprimentar);
    resultado.appendChild(caixinha);

    formulario.reset();
    nome.focus();
  } else {
    error.textContent = "Preencha todos os campos.";
  }
});
*/