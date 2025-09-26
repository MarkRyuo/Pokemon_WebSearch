import { PokemonHandler } from './pokemon';
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class="bg-blue-400 h-screen grid">
    <nav>
      <a href="/PokemonList" data-navigo>Pokemon</a>
      <img src="">
    </nav>

    <main>
      <div>
        <img src="">
      </div>
      <div class="grid justify-center content-center gap-y-3">
        <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-sm p-2 bg-white rounded-sm">
        <button type="button" id="btnSearch" class="bg-yellow-300 text-black p-2 w-40 justify-self-center rounded-sm">
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

