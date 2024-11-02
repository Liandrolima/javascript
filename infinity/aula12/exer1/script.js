/* 01 Crie um objeto JSON que represente informações sobre um livro. O objeto
deve ter propriedades como título, autor, ano de publicação e uma lista de
palavras-chave.*/

const dados = {
    "titulo":"Evangelio de Marcos",
    "autor": "marcos",
    "ano de publicação": 2024,
    "caracteres": ["vida", "salvação", "libertação"]
}

console.log(dados)
console.log(JSON.stringify(dados))