import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Nav from './components/Nav';
import PokemonDetail from './components/PokemonDetail';
import {getPokemon,getAllPokemon, getAbilityDescription} from './functions/pokeFunctions'
import {ToastContainer} from 'react-toastify'

function App() {

  const [loaded, setLoaded] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [pokemonDescription, setPokemonDescription] = useState('')


  const retrieveCurrentPokemon = async (id) => {
      let poke = await getPokemon(id)
      // console.log(poke)
      setPokemon(poke.pokemon)
      setPokemonDescription(poke.description)
      setCurrentPokemon(id)
      setLoaded(true)
  }

  // const [allPokemons, setAllPokemons] = useState([])

  // const fetchAllPokemon = async () => {
  //   let all = await getAllPokemon()

  //   // console.log(all[0].results)
 
  // }


  useEffect(() => {
      retrieveCurrentPokemon(currentPokemon)
  },[])

 
 
  return (
    <div className="App">
      <Nav />
      <SearchBar retrieveCurrentPokemon={retrieveCurrentPokemon} />
     
      {
        loaded === true  ? <PokemonDetail pokemon={pokemon} description={pokemonDescription} />  : <></>
      }
      <ToastContainer />
    </div>
  );
}

export default App;
