import './style.css'

export function Homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <nav>
      <a href="/PokemonList" ${data-navigo}>Pokemon</a>
      <img src="">
    </nav>

    <main>
      <div>
        <img src="">
      </div>
      <div>
        <input type="text" name="pokemonname" placeholder="Enter Pokemon Name" spellcheck required id="inptPokemon">
        <button type="button" id="btnSearch">
          Search
        </button>
        <div>
          <img src="">
        </div>
      </div>
    
    </main>
    
  </div>
`

};

