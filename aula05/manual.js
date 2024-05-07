// Variáveis e tipos primitivos
/*
IDENTIFICADORES:
podem começar com letra, $ ou _
não podem começar com números
é possível usar letras ou números
é possível usar acentos e símbolos
não podem conter espaços
não podem ser palavras reservados como palavras que java já ultiliza em variávei em comandos
Maiúsculas e minúsculas fazem a diferença
tente escolher nomes coerentes para as variáveis
Evite se tornar uma 'programador alfabeto' ou um 'programador contador'
DATA TYPES
number(Infinity, NaN)
string
boolean
null(object)
undefined
object(array)
function
OBS:para identificar uma variável usa-se o typeof + nome da variável
*/

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro programa</title>
    <style>/*essa é a forma de comentário em css*/
        body {
            background-color: blue;
            color: white;
            font: normal 20pt Arial;
        }
    </style>
</head>
<body><!--essa é a forma de comentário em html-->
    <h1>Jesus salva se renunciar!</h1>
    <p>Renúncia é sacrifício</p>
    <script>        
       var n1 = Number(window.prompt('Digite um número: '))//quando não tem Number é string
       // mesmo que se digite um numero o prompt me retorna uma string pois é característica do comando
       // então é necessário converter uma string em número
       /*CONVERSÃO DE STRING PARA NÚMERO
       Number.parseInt(n) para interiro
       Number.parseFloat(n) para real
       VERSÃO ATUAL EM BAIXO MAS NÃO ELIMINA AS ANTERIORES
       Number(n) o própri js já converte em inteiro ou real 
       */
       var n2 = Number(window.prompt('Digite outro número: '))//quando não tem Number é string
       var s = n1 + n2
       window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)
       //window.alert('A soma dos números é ' + String(s))
       // o sinal de + serve para concatenação(string + string) e para adição(number + number)
       /*
       CONVERSÃO DE NÚMERO PARA STRING
       String(n)
       n.toString()
       FORMATANDO STRING
       Var s = 'JavaScript'
       'Eu estou aprendendo s' não faz interpolação
       'Eu estou aprendendo' + s concatenação
       versão mais recente
        usa-se templatestring
        `Eu estou aprendendo ${s}` usa-se crase pois é a delimitação de templatestring
       > nome = 'Liandro'
        'Liandro'
        > idade = 43
        43
        > nota = 9.5
        9.5
        > nome
        'Liandro'
        > idade
        43
        > nota
        9.5
        > 'O aluno ' + nome 'tem ' + idade 'e sua nota é ' + nota

        > 'O aluno ' + nome + ' com ' + idade + ' anos tirou a nota ' + nota
        'O aluno Liandro com 43 anos tirou a nota 9.5'
        agora uando templatestring
        ` O aluno ${nome} com ${idade} anos tirou a nota ${nota}`
        FORMATANDO STRING
        var s = 'JavaScript'
        s.length quantos caracteres a string tem
        s.toUpperCase() jogar para letras maiusculas
        s.toLowerCase() jogar para letras minusculas
        Formatação de números
        var n1 = 1543.5
        com dua casas decimais basta digita o código abaixo:
        n1.toFixed(2)
        trocoar uma coisa por outra, geralmente quando se quer trocar ponto por vírgula
        n1.toFixed(2).replace('.', ',')
        SALARIO
        n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) EM real
        n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) EM DOLAR
        n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) EM EURO

       */
    </script>
    
</body>
</html>
