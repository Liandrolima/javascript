document.querySelector('#search').addEventListener('click', () => {
  const seucep = document.querySelector('#seucep').value.trim();

  // Validação do CEP
  if (seucep.length !== 8 || isNaN(seucep)) {
    alert('CEP inválido! Certifique-se de que o CEP possui 8 números.');
    return;
  }

  const apiUrl = `https://viacep.com.br/ws/${seucep}/json/`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('CEP não encontrado.');
      }
      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        throw new Error('CEP não encontrado.');
      }

      // Exibe as informações do endereço
      document.querySelector('#rua').textContent = `Rua: ${data.logradouro || 'Informação indisponível'}`;
      document.querySelector('#bairro').textContent = `Bairro: ${data.bairro || 'Informação indisponível'}`;
      document.querySelector('#cidade').textContent = `Cidade: ${data.localidade || 'Informação indisponível'}`;
    })
    .catch((error) => {
      alert(error.message);
      // Limpa os campos
      document.querySelector('#rua').textContent = 'Rua: ';
      document.querySelector('#bairro').textContent = 'Bairro: ';
      document.querySelector('#cidade').textContent = 'Cidade: ';
    });
});