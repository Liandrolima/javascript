document.querySelector('#search').addEventListener('click', () => {
  const input = document.querySelector('#pokemon-input').value.trim().toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;

  // Limpa mensagens e dados anteriores
  document.querySelector('#pokemon-info').classList.add('hidden');
  document.querySelector('#error-message').classList.add('hidden');

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Pokémon não encontrado. Verifique o nome ou número da Pokédex.');
      }
      return response.json();
    })
    .then((data) => {
      // Exibe as informações do Pokémon
      document.querySelector('#pokemon-name').textContent = `Nome: ${data.name}`;
      document.querySelector('#pokemon-id').textContent = `Número da Pokédex: ${data.id}`;
      document.querySelector('#pokemon-image').src = data.sprites.front_default || '';
      document.querySelector('#pokemon-types').textContent = `Tipos: ${data.types.map(type => type.type.name).join(', ')}`;

      // Mostra as informações
      document.querySelector('#pokemon-info').classList.remove('hidden');
    })
    .catch((error) => {
      // Mostra mensagem de erro
      document.querySelector('#error-message').textContent = error.message;
      document.querySelector('#error-message').classList.remove('hidden');
    });
});
