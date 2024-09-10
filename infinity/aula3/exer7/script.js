//FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRIO DIGITAR O ANO QUE ELE NASCEU PERGUNTE TAMBÉM SE ELE JÁ FEZ ANIVERSÁRIO.
//BASEADO NISSO CALCULE A IDADE DO USUÁRIO.

//SABENDO A IDADE DO USUÁRIO EXIBA NA TELA SE O VOTO DELE É OBRIGATÓRIO, FACULTATIVO OU SE ELE NEM PODE VOTAR.
//MENOS 16 - NÃO PODE VOTAR
//16 ~ 17 - FACULTATIVO
//18 ~ 70 - OBRIGATÓRIO
//MAIS 70 - FACULTATIVO

const ano_nasc = Number(prompt("Digite o seu ano de nascimento"))
const fez_aniversario = prompt("Você já fez aniversário?: [S/N]")
const ano_atual = new Date().getFullYear()
let idade

switch(fez_aniversario){
    case "s":
        idade = ano_atual - ano_nasc
        break
    case "n":
        idade = ano_atual - ano_nasc - 1
        break
    default:
        document.write("Opção inválida")
        break
}

if(idade < 16){
    document.write("Não pode votar")
}else if(idade>=18 && idade <= 70){
    document.write("Voto Obrigatório")
}else{
    document.write("Voto facultativo")
}