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

//* state : State Management 
let state = null ; //* set to global 

export const saveState = (data) => {
    if(data) {
        state = data ;
    }
    return state ;
}; //* This state is temporary only, one's we roload it not showing again; 


//* main
export async function PokemonHandler() {
    
    try {
        const pokemonName = getPokemonName();
        if(!pokemonName) return ;

        const data = await GetPokemonName(pokemonName)

        if(data) {
            saveState(data)
            router.navigate("/PokemonResult")
        }

    } catch (error) {
        console.error(error.message)
    }
};