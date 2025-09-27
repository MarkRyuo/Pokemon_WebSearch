import { PokemonHandler } from './pokemon';
import pokemontext from "./assets/png/PokemonTextV3.png";
import pokeball from "./assets/png/pokeball.png";
import pikachu from "./assets/png/pikachunn-removebg-enhance.png";
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class=" bg-[#198AD8] h-screen overflow-hidden">
    <div class="h-screen grid max-w-7xl mx-auto border grid-rows-[1fr_2fr_1fr] gap-3.5">
      <div>
        <nav class="border-red-800 flex justify-end bg-white/80 p-3 rounded-full items-center gap-9 max-h-15">
          <a href="/PokemonList" data-navigo>Pokemon</a>
          <a href="https://www.flaticon.com/free-icon/pokeball_287221" alt="flaticon" target="_blank" title="Pokeball by Flaticon">
            <img src="${pokeball}" class="max-w-10">
          </a>
        </nav>
      </div>

      <main class="border relative overflow-hidden">
        <div class="flex items-center justify-center">
          <img src="${pokemontext}" class="max-w-lg">
        </div>
        <div class="grid justify-center content-center gap-y-3">
          <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-sm p-2 bg-white rounded-xl inset-shadow-amber-50">
          <button type="button" id="btnSearch" class="bg-yellow-300 text-black p-2 w-30 justify-self-center rounded-2xl">
            Search
          </button>
        </div>
          
      </main>
      <div class="absolute right-0 bottom-0 w-[609px] h-auto overflow-hidden">
        <img src="${pikachu}" class="w-auto h-auto">
      </div>
      
    </div>
  </div>

`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

