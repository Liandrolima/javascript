//Faça um programa que pede para o usuário digitar uma frase e conte quantas palavras tem na frase digitada.




const cont = document.getElementById('cont');
const res = document.getElementById('res');
cont.addEventListener('click', () => {
    let frase = document.querySelector('#frase');
    let cont = 1
    for(let caracter_da_vez of frase.trim()) {
        if(caracter_da_vez === " ") {
            cont++
        }
    }
    console.log(`A quantidade de palavras na frase que vc digitou é ${cont}`)
    res.innerHTML = ''
    res.innerHTML += `${cont} \u{1F449}`
    
} )



/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <input type="text" placeholder="Escreva aqui..." id="entrada">
    <button id="btn">Contar</button>


    <script>

        const entradaInput = document.querySelector('#entrada')
        const btn = document.getElementById('btn')
        let contadorFrase = 0;

        btn.addEventListener('click', () => {

            const frase = entradaInput.value;

            for (let palavra of frase.split(' ')) {
                contadorFrase++
            }

            alert(contadorFrase)
            entradaInput.value = ''
            entradaInput.focus()
            contadorFrase = 0;
        })

        entradaInput.addEventListener('keydown', (e) => {

            if (e.key === 'Enter') {


                const frase = entradaInput.value;

                for (let palavra of frase.split(' ')) {
                    contadorFrase++
                }

                alert(contadorFrase)
                entradaInput.value = ''
                entradaInput.focus()
                contadorFrase = 0;
            }
        })



    </script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <input type="text" placeholder="Escreva aqui..." id="entrada">
    <button id="btn">Contar</button>


    <script>

        const entradaInput = document.querySelector('#entrada')
        const btn = document.getElementById('btn')
        let contadorFrase = 0;

        btn.addEventListener('click', () => {

            const frase = entradaInput.value;

            for (let palavra of frase.split(' ')) {
                contadorFrase++
            }

            alert(contadorFrase)
            entradaInput.value = ''
            entradaInput.focus()
            contadorFrase = 0;
        })

        entradaInput.addEventListener('keydown', (e) => {

            if (e.key === 'Enter') {


                const frase = entradaInput.value;

                for (let palavra of frase.split(' ')) {
                    contadorFrase++
                }

                alert(contadorFrase)
                entradaInput.value = ''
                entradaInput.focus()
                contadorFrase = 0;
            }
        })



    </script>
</body>

</html>
const frase = prompt("Digite uma frase")
let contador_de_palavras = 1

for (let caracter_da_vez of frase.trim()) {
    if(caracter_da_vez === " ") {
        contador_de_palavras++
    }
    
}
console.log(`A quantidade de palavras na frase que vc digitou é ${contador_de_palavras}`)*/