import { savedState } from "../utils/storeState"
import { router } from "../router"
import pokemonGif from "../assets/gif/xpRS9.gif"
import "../style.css"



export function PokemonResult() {
    const state = savedState.get()

    if(!state) {
        router.navigate("/")
    } else {
        document.querySelector("#app").innerHTML = `
            <div class="bg-red-500">
                <div>
                    <img src="${pokemonGif}">
                    <img src="${state.sprites?.front_default}" id="pokemonImg" class="w-md">
                </div>
    
                <div>
                    <h1 class="text-2xl">${state.name}</h1>
                    <img src="">
                </div>
            
            </div>
        
        `
    }


}