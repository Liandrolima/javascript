//DESAFIO PRÁTICO: Você está desenvolvendo um sistema de autenticação para um aplicativo. Sua tarefa é implementar uma função chamada autenticarUsuario que aceita um nome de usuário, uma senha e duas funções de callback como argumentos. A função autenticarUsuario deve simular um processo de autenticação simples, onde o nome de usuário e a senha são verificados. Se as informações forem válidas, a primeira função de callback deve ser chamada e mostrar uma frase de login com o nome de usuário em letras minúsculas. Caso contrário, a segunda função de callback deve ser chamada para indicar a falha na autenticação.

function autenticarUsuario(username, password, sucessoCallback, falhaCallback) {
    // Simulação de validação de credenciais
    const usuarioValido = 'admin';
    const senhaValida = '1234';
    
    // Verificando se as credenciais são válidas
    if (username === usuarioValido && password === senhaValida) {
        sucessoCallback(username.toUpperCase()); // Converte o nome de usuário para letras minúsculas
    } else {
        falhaCallback(); // Chama o callback de falha
    }
}

// Função de callback para sucesso
function loginSucesso(username) {
    console.log(`Login bem-sucedido! Bem-vindo, ${username}.`);
}

// Função de callback para falha
function loginFalha() {
    console.log('Falha na autenticação! Nome de usuário ou senha incorretos.');
}

// Testando a função com credenciais válidas
autenticarUsuario('admin', '1234', loginSucesso, loginFalha);  // Login bem-sucedido! Bem-vindo, admin.

// Testando a função com credenciais inválidas
autenticarUsuario('usuario', 'senhaErrada', loginSucesso, loginFalha);  // Falha na autenticação! Nome de usuário ou senha incorretos.
