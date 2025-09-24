import { router } from "../router";



export function PokemonList() {

    const empty = false ;

    if(!empty) {
        router.navigate("/UnderConstruction")
    } else {
        document.querySelector("#app").innerHTML = `
            <div>
                <h1>Hello this is Pokemon List</h1>
            </div>
        `
    }

}