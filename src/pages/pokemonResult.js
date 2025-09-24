import { savedState } from "../utils/storeState"
import { router } from "../router"
import pokemonGif from "../assets/gif/xpRS9.gif"



export function PokemonResult() {
    const state = savedState.get()

    if(!state) {
        router.navigate("/")
    } else {
        document.querySelector("#app").innerHTML = `
            <div>
                <div>
                    <img src="${pokemonGif}">
                    <img src="${state.sprites?.front_default}" id="pokemonImg">
                </div>
    
                <div>
                    <h1>${state.name}</h1>
                    <img src="">
                </div>
            
            </div>
        
        `
    }


}