import { GetPokemonName } from "./services/pokemon.api.js";


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

export function PokemonHandler() {
    
    try {
        const data = GetPokemonName(getPokemonName())
        

    } catch (error) {
        
    }
};