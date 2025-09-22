import { ApiClient } from "./apiClient";

//* GET
export async function GetPokemonName(pokemonName) {
    const response = await ApiClient("https://pokeapi.co/api/v2/pokemon/", pokemonName, {
        Method: "GET"
    })
    return response ;
}

