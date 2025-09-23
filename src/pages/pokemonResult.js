import { saveState } from "../pokemon.js"



export function PokemonResult() {
    const stateData = saveState() ;

    document.querySelector("#app").innerHTML = `
        <div>
            <div>
                <img src="">
                <img src="">
            </div>

            <div>
                <h1>${stateData.name}</h1>
                <img src="">
            </div>
        
        </div>
    
    `
}