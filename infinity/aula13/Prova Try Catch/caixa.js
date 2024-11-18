let saldo = 1000; // Saldo inicial do usuário

        function verSaldo() {
            alert("Seu saldo atual é: R$ " + saldo.toFixed(2));
        }

        // Limpar mensagem de erro
        function limparMensagemDeErro() {
            document.querySelector('#error').innerHTML = ''; // Limpa a mensagem de erro
        }

        // Mostrar o formulário de depósito
        function mostrarFormDepositar() {
            document.querySelector('#formDepositar').style.display = 'block';
            document.querySelector('#formSacar').style.display = 'none';
            limparMensagemDeErro();
        }

        // Mostrar o formulário de saque
        function mostrarFormSacar() {
            document.querySelector('#formSacar').style.display = 'block';
            document.querySelector('#formDepositar').style.display = 'none';
            limparMensagemDeErro();
        }

        function depositar() {
            let valorDeposito = parseFloat(document.querySelector('#deposito').value);
            limparMensagemDeErro();

            try {
                if (isNaN(valorDeposito) || valorDeposito <= 0) {
                    throw new Error('Valor inválido. Por favor, insira um valor válido maior que zero.');
                }
                saldo += valorDeposito;
                alert("Você depositou R$ " + valorDeposito.toFixed(2));
                document.querySelector('#formDepositar').style.display = 'none'; // Esconde o formulário
            } catch (error) {
                document.querySelector('#error').innerHTML = error.message; // Exibe o erro
            }
        }

        function sacar() {
            let valorSaque = parseFloat(document.querySelector('#saque').value);
            limparMensagemDeErro();

            try {
                if (isNaN(valorSaque) || valorSaque <= 0) {
                    throw new Error('Valor inválido. Por favor, insira um valor válido maior que zero.');
                } else if (valorSaque > saldo) {
                    throw new Error('Saldo insuficiente para essa operação.');
                }
                saldo -= valorSaque;
                alert("Você sacou R$ " + valorSaque.toFixed(2));
                document.querySelector('#formSacar').style.display = 'none'; // Esconde o formulário
            } catch (error) {
                document.querySelector('#error').innerHTML = error.message; // Exibe o erro
            }
        }