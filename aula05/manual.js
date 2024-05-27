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
= RECEBE
== igual
=== IGUALDADE RESTRITA
OPERADORES ARTIMÉTICOS(conforme as regras da matemática)
+ - * / % ** ()
OPERADORES RELACIONAIS(quem aparecer primeiro vai ser feito primeiro)
>
<
>=
OPERADORES LÓGICOS

PRIMEIRO O NÃO ! DEPOIS E && DEPOIS O OU ||

ORDEM: OPERADORES ARTIMÉTICOS DEPOIS OPERADORES RELACIONAIS DEPOIS OPERADORES LÓGICOS E POR ULTIMO OPERADOR TERNÁRIO


EXEMPLOS
idade >= 15 && idade <=17 idade entre 15 e 17?
estado =='RJ' || estado =='SP' o estado é RJ ou SP?
salário > 1500 && sexo != 'M' O sálario é acima de 1500 e não é homem?

OPERADOR TERNÁRIO(PORQUE TEM TRÊS PARTES)
? 
:

   teste      ?(SE FOR)   true       :(SE NÃO)   false
média >=7.0   ?        "APROVADO"    :        "REPROVADO"


EXEMPLOS 

> var x = 8
undefined
> var res = x % 2 == 0 ? 5 : 9
undefined
> x
8
> res
5
> var idade = 19
undefined
> var r = idade >= 18 ? 'MAIOR' : 'MENOR'
undefined
> r
'MAIOR'
DOM - Document Object Model ele é a vertente web do Java Script, para o qual a linguagem foi criada. Uma poderosa ferramenta que esta dentro do navegador, o conjunto de objetos JavaScript para tratamento de componentes visuais
Ávore DOM(modelo de objeto para documentos): começa da raiz que é window, tudo dentro do js esta dentro do window(dentro do window temos vários objetos como: location, document, history), dentro de document temos html e dentro de html temos head e body, dentro de head temos meta e title, dentro do body temos h1, p, p, div, dentro de p temos strong isso é um exemplo de árvore DOM que está no exercício ex004.html da aula06.

Existe várias maneiras de se navegar pelos elementos de uma árvore DOM.
        1 - por Marca
        2- por ID
        3- por Nome
        4- por Classe
        5- por Seletor
        
        /*window.document.write('Jesus')*/
        /*window.document.write(window.document.charset)*/
        /*window.document.write(window.navigator.appName)*/
        /*window.document.write(window.window.document.URL)

        /*1 - por Marca(tag)*/
        /*var corpo = window.document.body
        var p1 = window.document.getElementsByTagName('p')[1]
        window.document.write('Esta escrito assim: ' + p1.innerText)
        corpo.style.background = 'black'
        p1.style.color = 'blue'
        document.write(p1.innerHTML)
        window.alert(p1.innerHTML)
        window.alert(p1.innerText)*/
        /*2- por ID*/
        var corpo = window.document.body
        var p1 = window.document.getElementsByTagName('p')[1]
        /*var d = window.document.getElementById('msg')
        d.style.background = 'green'
        d.innerText = 'Estou aguardando...'*/               
        /*3- por Nome*/
        var d = window.document.getElementsByName('msg')[0]
        d.innerText = 'olá!'
        /*4- por Classe*/
        window.document.getElementsByClassName('msg')[0]
        /*5- por Seletor MAIS RECOMENDADO*/
        var d = window.document.querySelector('div#msg')
        d.style.background = 'blue'
        EVENTOS DOM: É TUDO AQUILO QUE PODE ACONTECER COM UM ELEMENTO COM EXEMPLO UMA DIV, P, H1. UM EXEMPLO DO QUE PODE ACONTECER COM UM ELEMENTO COMO EXEMPLO SÃO EVENTOS DE MOUSE, OU EVENTOS DE MOVIMENTOS DO MOUSE(MOUSEENTER, MOUSEMOVE, MOUSEDOWN, MOUSEUP, CLICK, MOUSEOUT) OUSEJA, DISPARADAS DE EVENTSO
        PARA UM EVENTO DIPARAR É NECESSÁRIO UMA FUNÇÃO E UMA FUNÇÃO É UM CONJUNTO DE códigoS. A ESTRUTURA PODE SER:
        function ação(parametros){

        }

ESTRUTURA CONDICIONAL

var idade = 15
if (idade < 18) {
    console.log(`Menor de idade`)
    
} else {
    console.log(`Maior de idade`)
}

#########################################################################################################################

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')    
} else if ( idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

#########################################################################################################################

var hora = 11
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

#########################################################################################################################

colocando a hora ATUAL

f (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

#########################################################################################################################
Condições Múltiplas

break é obrigatório

var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 7
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
//console.log(diaSem)

switch(diaSem) { //usado em dados pontuais(números inteiros e strings) não deve ser usado em intervalo
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}