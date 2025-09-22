import { ApiClient } from "./apiClient";

//* GET
export async function GetPokemonName() {
    const response = await ApiClient("https://pokeapi.co/api/v2/pokemon", {
        Method: "GET"
    })
    return response ;
}

