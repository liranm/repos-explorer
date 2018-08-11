const baseUrl = 'https://api.github.com/users';

export const loadRepos = (username) => 
     fetch(`${baseUrl}/${username}/repos`)
        .then(res => res.json())
        .then(repos => {
            const sortedArray = [ ...repos ].sort((repoA, repoB) => 
                repoB.stargazers_count - repoA.stargazers_count
            );

            return sortedArray.slice(0, 9).map(repo => 
                ({
                    name: repo.name,
                    stargazers_count: repo.stargazers_count,
                    url: repo.html_url,
                    id: repo.id
                })
            );
        });