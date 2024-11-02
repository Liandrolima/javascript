/*Atividade 02 Dada a seguinte lista de objetos JSON que representam estudantes,
adicione um novo estudante, remova o estudante com um determinado
ID e atualize as notas de todos os estudantes em uma determinada
disciplina.*/

const estudantes = [
    {"id": 1, "nome": "tais", "idade": 15, "nota": {"matematica": 10, "portugues": 8}},
    {"id": 2, "nome": "Maria", "idade": 16, "nota": {"matematica": 7, "portugues": 6}},
    {"id": 3, "nome": "rui", "idade": 17, "nota": {"matematica": 8, "portugues": 9}}
]

console.log(estudantes)
estudantes.push({"id": 4, "nome": "leo", "idade": 20, "nota": {"matematica": 6, "portugues": 6}})
console.log(estudantes)
/*const idParaRemover = 2;
const estudantesAtualizados = estudantes.filter(estudante => estudante.id !== idParaRemover);
console.log(estudantesAtualizados)*/
const novaNota = 10;
const estudantesAtualizados = estudantes.forEach(estudante => {
    estudante.nota.matematica = novaNota;
  })

