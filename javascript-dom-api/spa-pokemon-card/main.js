const searchButton = document.getElementById('searchButton');
const pokemonContainer = document.querySelector('.pokemon');
const searchInput = document.querySelector('.form-control');

searchButton.addEventListener('click', function () {
const searchTerm = searchInput.value.toLowerCase();
    if (!searchTerm) {
        alert('Bitte geben Sie den Namen eines Pokémons ein.');
        return;
    }
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    fetch(apiUrl).then(response => {
        if (!response.ok) {
        throw new Error('Pokemon konnte nicht gefunden werden.');
        }
        return response.json();
        }).then(pokemonData => {
        displayPokemonInfo(pokemonData);
        }).catch(error => {
        console.error('Fehler:', error);
        alert('Pokemon konnte nicht gefunden werden.');
        });
});

function displayPokemonInfo(pokemon) {
pokemonContainer.innerHTML = '';
pokemonContainer.classList.add('border', 'border-warning');
const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonName.style.backgroundColor = "white";
    pokemonName.style.padding = "5px 25px";  

  // Pokemon-Bild (Sprite)
const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('border', 'border-warning');
    pokemonImage.style.borderRadius= "50%";

  // Pokemon-Werte (Stats)
const pokemonStats = document.createElement('p');
    pokemonStats.textContent = `Werte: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}`;

  // Pokemon-Fähigkeiten (Abilities)
const pokemonAbilities = document.createElement('p');
    pokemonAbilities.textContent = `Fähigkeiten: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`;

    pokemonContainer.appendChild(pokemonName);
    pokemonContainer.appendChild(pokemonImage);
    pokemonContainer.appendChild(pokemonStats);
    pokemonContainer.appendChild(pokemonAbilities);
}  