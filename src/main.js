import { PokemonHandler } from './pokemon';
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class=" bg-blue-400">
    <div class="h-screen grid max-w-7xl mx-auto border">
      <div>
        <nav class="border-red-800 flex justify-end bg-white p-5 rounded-full">
          <a href="/PokemonList" data-navigo>Pokemon</a>
          <img src="">
        </nav>
      </div>

      <main class="">
        <div>
          <img src="https://i.pinimg.com/736x/c2/64/a1/c264a1798fd1cdc3899716c72051960c.jpg">
        </div>
        <div class="grid justify-center content-center gap-y-3">
          <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-sm p-2 bg-white rounded-sm">
          <button type="button" id="btnSearch" class="bg-yellow-300 text-black p-2 w-30 justify-self-center rounded-sm">
            Search
          </button>
          <div>
            <img src="">
          </div>
        </div>
      
      </main>
      
    </div>
  </div>

`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

