

document.getElementById("github-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;

    if (!username) {
    alert("GitHub-Benutzernamen eingeben.");
    return;
    }

    // const token = "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"; 
    const url = `https://api.github.com/users/${username}/repos`;
    // const url = `https://api.github.com/users/${username}/repos?access_token=${token}`;
    try {
    const response = await fetch(url);
    // {headers: {Authorization: `Bearer ${token}`,},}

    if (!response.ok) {
        throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
        );
    }

    const data = await response.json();

    displayRepos(data);
    } catch (error) {
    console.error("API-Anfrage fehlgeschlagen:", error.message);
    }
});

function displayRepos(repos) {
    const repoList = document.getElementById("repoList");
    repoList.innerHTML = "";
    repos.forEach((repo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = ` <h3><span>${repo.name}</span> <span>${new Date(repo.pushed_at).toLocaleDateString()}</span></h3>`;
    listItem.style.cursor = "pointer";
    listItem.addEventListener("click", function () {
        window.location.href = repo.html_url;
    });
    repoList.appendChild(listItem);
    });
}