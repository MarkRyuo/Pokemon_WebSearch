import { GetPokemonName } from "./services/pokemon.api.js";
import { router } from "./router.js"

const getPokemonName = () => {
    const inptPokemon = document.getElementById("inptPokemon")
    const value = inptPokemon.value.trim().toLowerCase();

    if(!value) {
        alert("Enter a Pokemon!")
        return null
    };
    return value;
} 

//* state

//* main

export async function PokemonHandler() {
    
    try {
        const pokemonName = getPokemonName();
        if(!pokemonName) return ;

        const data = await GetPokemonName(pokemonName)

        if(data) {
            console.log(data.name);
            router.navigate("/PokemonResult")
        }

    } catch (error) {
        console.error(error.message)
    }
};