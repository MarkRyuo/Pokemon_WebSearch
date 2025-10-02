import { PokemonHandler } from './pokemon';
import pokemontext from "./assets/png/PokemonTextV3.png";
import pokeball from "./assets/png/pokeball.png";
import pikachu from "./assets/png/pikachunn-removebg-enhance.png";
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class="">
    <div class="">
      <div>
        <nav class="">
          <a href="/PokemonList" data-navigo>Pokemon</a>
          <a href="https://www.flaticon.com/free-icon/pokeball_287221" alt="flaticon" target="_blank" title="Pokeball by Flaticon">
            <img src="${pokeball}" class="">
          </a>
        </nav>j
      </div>

      <main class="">
        <div class="">
          <img src="${pokemontext}" class="">
        </div>
        <div class="">
          <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-sm p-2 bg-white rounded-xl inset-shadow-amber-50">
          <button type="button" id="btnSearch" class="">
            Search
          </button>
        </div>
          
      </main>
      <div class="">
        <img src="${pikachu}" class="">
      </div>
      
    </div>
  </div>

`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

