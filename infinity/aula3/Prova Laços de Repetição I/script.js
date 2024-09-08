//[JS-A03] Você foi contratado(a) para desenvolver um programa que irá auxiliar um professor a calcular algumas estatísticas das notas de seus alunos. O programa deve solicitar ao professor o número total de estudantes na turma e, em seguida, pedir que ele insira as notas de cada aluno individualmente. Após receber todas as notas, o programa deverá calcular a média da turma e identificar a maior e a menor nota obtida.//
//Instruções:
//Solicite ao professor que digite o número total de estudantes na turma.
//Em seguida, peça que o professor insira a nota de cada aluno individualmente, uma por vez.
//Calcule a média da turma somando todas as notas e dividindo pelo número total de estudantes.
//Identifique e registre a maior nota obtida na turma.
//Ao final, exiba a média da turma e a maior e a menor nota encontrada.

//Dicas:

//Utilize um loop while para coletar as notas de todos os alunos.
//Armazene as notas em uma variável e vá atualizando o valor da soma a cada nova nota inserida.
//Compare cada nota com a maior nota atualmente registrada para encontrar a maior nota.
//Para calcular a média, divida a soma das notas pelo número total de estudantes.
//Exiba os resultados de forma clara e organizada.

//Lembre-se de testar o programa com diferentes valores de notas e número de estudantes para garantir que ele funcione corretamente em diversas situações. Boa programação!

let totalEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

if (!isNaN(totalEstudantes) && totalEstudantes > 0) {
  let somaNotas = 0;
  let maiorNota = -Infinity;
  let menorNota = Infinity;
  let contador = 1;

  while (contador <= totalEstudantes) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"));

    if (!isNaN(nota) && nota >= 0) {
      somaNotas += nota;

      // Verifica se a nota é a maior ou menor até agora
      if (nota > maiorNota) {
        maiorNota = nota;
      }
      if (nota < menorNota) {
        menorNota = nota;
      }

      contador++;
    } else {
      console.log("Nota inválida, por favor insira um número válido.");
    }
  }

  let media = somaNotas / totalEstudantes;

  console.log("Média da turma: " + media.toFixed(2));
  console.log("Maior nota: " + maiorNota);
  console.log("Menor nota: " + menorNota);
} else {
  console.log("Por favor, insira um número válido de estudantes.");
}
