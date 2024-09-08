//Você foi contratado para desenvolver um simulador de caixa eletrônico (ATM). Este
//projeto tem como objetivo aplicar seus conhecimentos sobre loops, condicionais e
//manipulação de variáveis. O simulador deve permitir que os usuários realizem
//operações básicas como verificação de saldo, depósito e saque.

//Interface de Usuário:
//O simulador deve exibir um
//menu com as seguintes opções:

//Ver Saldo
//Depositar
//Sacar
//Sair

//Funcionalidades:

//Ver Saldo: Exibe o saldo atual do usuário.
//Depositar: Permite que o usuário deposite
//um valor em sua conta.
//Sacar: Permite que o usuário saque um valor
//de sua conta, desde que o valor do saque
//não exceda o saldo disponível.
//Sair: Encerra o programa.

let saldo = 1000; // Saldo inicial do usuário

function mostrarMenu() {
  return prompt(
    "Escolha uma opção:\n1. Ver Saldo\n2. Depositar\n3. Sacar\n4. Sair"
  );
}

function verSaldo() {
  console.log("Seu saldo atual é: R$ " + saldo.toFixed(2));
}

function depositar() {
  let valorDeposito = parseFloat(prompt("Digite o valor a ser depositado:"));
  if (!isNaN(valorDeposito) && valorDeposito > 0) {
    saldo += valorDeposito;
    console.log("Você depositou R$ " + valorDeposito.toFixed(2));
  } else {
    console.log("Valor inválido. Tente novamente.");
  }
}

function sacar() {
  let valorSaque = parseFloat(prompt("Digite o valor a ser sacado:"));
  if (!isNaN(valorSaque) && valorSaque > 0) {
    if (valorSaque <= saldo) {
      saldo -= valorSaque;
      console.log("Você sacou R$ " + valorSaque.toFixed(2));
    } else {
      console.log("Saldo insuficiente para essa operação.");
    }
  } else {
    console.log("Valor inválido. Tente novamente.");
  }
}

function caixaEletronico() {
  let opcao;
  do {
    opcao = mostrarMenu();

    switch (opcao) {
      case "1":
        verSaldo();
        break;
      case "2":
        depositar();
        break;
      case "3":
        sacar();
        break;
      case "4":
        console.log("Encerrando o programa...");
        break;
      default:
        console.log("Opção inválida. Escolha uma opção entre 1 e 4.");
    }
  } while (opcao !== "4");
}

// Executa o simulador
caixaEletronico();
