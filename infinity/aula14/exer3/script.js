document.getElementById('search').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    if (!username) {
      alert('Please enter a GitHub username!');
      return;
    }
  
    const apiUrl = `https://api.github.com/users/${username}`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        // Display user information
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('avatar').style.display = 'block';
        document.getElementById('name').textContent = data.name || 'Name not available';
        document.getElementById('bio').textContent = data.bio || 'Bio not available';
      })
      .catch((error) => {
        alert(error.message);
        // Clear previous data
        document.getElementById('avatar').style.display = 'none';
        document.getElementById('name').textContent = '';
        document.getElementById('bio').textContent = '';
      });
  });
  