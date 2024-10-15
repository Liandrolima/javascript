const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

function apertaramNoMeuBotao() {
  const media = (Number(n1.value) + Number(n2.value)) / 2;
  resultado.textContent = `A sua média foi ${media.toFixed(2)}`;
}

botao.addEventListener("click", apertaramNoMeuBotao);
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  const media = (Number(n1.value) + Number(n2.value)) / 2;
  resultado.textContent = `A sua média foi ${media.toFixed(2)}`;
});