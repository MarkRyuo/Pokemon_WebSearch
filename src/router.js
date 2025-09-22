import Navigo from "navigo";
import { Homepage } from "./main";
import { PokemonList } from "./pages/pokemonList";


export const router = new Navigo("/");

router 
    .on("/", () => Homepage())
    .on("/PokemonList", () => PokemonList())
    .notFound(() => {
        document.querySelector("#app").innerHTML = "<h1>404 Page</h1>"
    })

document.addEventListener("DOMContentLoaded", () => {
    router.resolve();
})