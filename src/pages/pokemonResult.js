import { savedState } from "../utils/storeState"
import { router } from "../router"



export function PokemonResult() {
    const state = savedState.get()

    if(!state) {
        router.navigate("/")
    } else {
        document.querySelector("#app").innerHTML = `
            <div>
                <div>
                    <img src="../assets/gif/xpRS9.gif">
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