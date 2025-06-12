    const username = 'BigChungusssss'; // <-- Replace with your GitHub username
    const repoList = document.getElementById('repo-list');

    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const repos = await response.json();

        // Sort repos by star count descending
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        repos.forEach(repo => {
          const li = document.createElement('li');
          li.innerHTML = `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
              ${repo.name}
            </a>
            <span class="stars">⭐ ${repo.stargazers_count}</span>
            <small>${repo.description || ''}</small>
          `;
          repoList.appendChild(li);
        });
      } catch (error) {
        repoList.innerHTML = '<li>Unable to fetch repositories.</li>';
        console.error(error);
      }
    }

    fetchRepos();