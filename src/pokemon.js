import { GetPokemonName } from "./services/pokemon.api.js";
import { router } from "./router.js"
import { savedState } from "./utils/storeState.js";


const getPokemonName = () => {
    const inptPokemon = document.getElementById("inptPokemon")
    const value = inptPokemon.value.trim().toLowerCase();

    if(!value) {
        alert("Enter a Pokemon!")
        return null
    };
    return value;
} 



//* main
export async function PokemonHandler() {
    
    try {
        const pokemonName = getPokemonName();
        if(!pokemonName) return ;

        const data = await GetPokemonName(pokemonName)


        if(data) {
            savedState.set(data)
            router.navigate("/PokemonResult")
        }

    } catch (error) {
        console.error(error.message)
    }
};