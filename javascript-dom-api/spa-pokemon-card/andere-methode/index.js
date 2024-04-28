const input = document.querySelector("#input");
const btn = document.querySelector("button");
input.onfocus = () => {
  input.style.border = "1px solid rgb(255,153,0)";
};
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!input.value) {
    input.style.border = "1px solid red";
    input.setAttribute("placeholder", "pls enter the  name");
    return;
  }
  const userInput = input.value.toLowerCase();
  console.log(userInput);
  const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("poki not fund");
    }
    const data = await response.json();
    const pokoObject = {
      name: data.name,
      imgFront: data.sprites.front_default,
      stats: data.stats,
      abilities: data.abilities,
    };
    displayPoko(pokoObject);
  } catch (error) {
    input.style.border = "1px solid red";
    input.setAttribute("placeholder", "Poki not found");
  }
});
const pokomonElement = document.createElement("div");
pokomonElement.classList.add("pokemon-element");
function displayPoko(obj) {
  const pokemonContainer = document.querySelector(".pokemon-container");
  if (pokemonContainer.children.length > 0) {
    pokemonContainer.removeChild(pokomonElement);
  }
  pokomonElement.innerHTML = `
            <h2>${obj.name}</h2>
            <img src="${obj.imgFront}">
            <h3>Stats</h3>
            <ul>
            ${obj.stats.map(
              (stat) => `<li class="stat">
            <span>${stat.stat.name}</span>
            <span>${stat.base_stat}</span>
            </li>`
            )}
            </ul>
            <h3>Abilities</h3>
            <ul>
            ${obj.abilities
              .map(
                (ability) => `<li class="ability">
                ${ability.ability.name}
            </li>`
              )
              .join("")}
            </ul>
        `;
  pokemonContainer.appendChild(pokomonElement);
}