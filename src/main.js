import { PokemonHandler } from './pokemon';
import pokemontext from "./assets/png/PokemonTextV3.png";
import pokeball from "./assets/png/pokeball.png";
import pikachu from "./assets/png/pikachunn-removebg-enhance.png";
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class="bg-blue-500 w-screen h-screen overflow-hidden box-border">
    <div class="grid grid-rows-[1fr, 1fr,] h-screen">
      <div class="w-screen h-20">
        <nav class="bg-white rounded-full flex flex-row justify-end items-center gap-1 p-2 w-full">
          <a href="/PokemonList" data-navigo>Pokemon</a>
          <a href="https://www.flaticon.com/free-icon/pokeball_287221" alt="flaticon" target="_blank" title="Pokeball by Flaticon">
            <img src="${pokeball}" class="w-full max-w-8 min-w-4 ">
          </a>
        </nav>
      </div>

      <main class="w-screen relative flex flex-col items-center">
        <div class="">
          <img src="${pokemontext}" class="w-full max-w-md min-w-2xs">
        </div>
        <div class="">
          <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-sm p-2 bg-white rounded-xl inset-shadow-amber-50">
          <button type="button" id="btnSearch" class="">
            Search
          </button>
        </div>
          
      </main>
      <div class="absolute">
        <img src="${pikachu}" class="hidden">
      </div>
      
    </div>
  </div>

`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

