import { PokemonHandler } from './pokemon';
import pokemontext from "./assets/png/PokemonTextV3.png";
import pokeball from "./assets/png/pokeball.png";
import pikachu from "./assets/png/pikachunn-removebg-enhance.png";
import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div class="bg-blue-500 w-screen h-screen overflow-hidden box-border">
    <div class="grid grid-rows-[80px, 1fr] h-screen sm:max-w-7xl sm:m-auto">
      <div class="w-screen sm:w-full">
        <nav class="bg-white/75 rounded-full flex flex-row justify-end items-center gap-3 p-2 w-full">
          <a href="/PokemonList" data-navigo class="font-poppins font-light">Pokédex</a>
          <a href="https://www.flaticon.com/free-icon/pokeball_287221" alt="flaticon" target="_blank" title="Pokeball by Flaticon">
            <img src="${pokeball}" class="w-full max-w-8 min-w-4 ">
          </a>
        </nav>
      </div>

      <main class="relative flex flex-col items-center">
        <div class="">
          <img src="${pokemontext}" class="w-full max-w-xl min-w-2xs">
        </div>
        <div class="flex flex-col gap-2 items-center">
          <input type="text" name="PokemonNameInput" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon" class="w-screen sm:w-sm p-2.5 bg-white rounded-xl inset-shadow-amber-50">
          <button type="button" id="btnSearch" class="bg-yellow-300 w-full max-w-28 p-1.5 rounded-xl font-bold text-base font-poppins">
            Search
          </button>
        </div>
          
      </main>
      <div class="absolute right-10 bottom-0">
        <img src="${pikachu}" class="hidden w-full max-w-lg xl:block">
      </div>
      
    </div>
  </div>

`
const btnSearch = document.getElementById("btnSearch") ;
btnSearch.addEventListener("click", () => {
  PokemonHandler()
}) 
};

