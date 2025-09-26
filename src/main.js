import { PokemonHandler } from './pokemon';
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class="bg-blue-400">
    <nav>
      <a href="/PokemonList" data-navigo>Pokemon</a>
      <img src="">
    </nav>

    <main>
      <div>
        <img src="">
      </div>
      <div>
        <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="max-w-xs">
        <button type="button" id="btnSearch">
          Search
        </button>
        <div>
          <img src="">
        </div>
      </div>
    
    </main>
    
  </div>
`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

