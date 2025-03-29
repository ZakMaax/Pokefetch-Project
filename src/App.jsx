import { useState, useEffect, useRef } from "react"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Pokemons from "./components/Pokemons"
import DetailsModal from "./components/DetailsModal"


function App() {
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [paginator, setPaginator] = useState({next: null, previous: null})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pokemonDetails, setPokemonDetails] = useState({
    name: "",
    id: "",
    types: [],
    weight: 0,
    height: 0,
    abilities: [],
    stats: {},
  })

   
  const dialog = useRef(null)
  const scrollPokemonsIntoView = useRef(null)

  // Fetch Pokemons on first render
   useEffect(() => {
    const fetchPokemons = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
            const data = await res.json()
            const paginaton = {next: data.next, previous: data.previous}
            setPaginator(paginaton)
            setPokemons(data.results)
        } catch (error) {
            setError('Error Fetching Pokemons, Please try again later!')
            console.log(error)
        }
        finally{
            setLoading(false)
        }
               
     } 

     fetchPokemons()

   }, [])


   // handle pokemon filtering logic

   useEffect(() => {
    const filtered = pokemons.filter(pokemon => {
      const pokemonId = pokemon.url.split('/')[6]
      return(
        pokemon.name.toLowerCase().includes(input.toLowerCase()) || pokemonId.includes(input)
      )
    })
      setFilteredPokemons(filtered)
   }, [input, pokemons])

// handle pagination next functionality
  async function handleNext() {
    if(paginator.next){
      async function fetchPokemons(url) {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(url)
            const data = await res.json()
            setPaginator({next: data.next, previous: data.previous})
            setPokemons(data.results)
        } catch (error) {
            setError('Error Fetching Pokemons, Please try again later!')
            console.log(error)
        }
        finally{
            setLoading(false)
        }
      }
      await fetchPokemons(paginator.next)
    }
   }

   // handle pagination previous functionality

   async function handlePrevious() {
    if(paginator.previous){
      async function fetchPokemons(url) {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(url)
            const data = await res.json()
            setPaginator({next: data.next, previous: data.previous})
            setPokemons(data.results)
        } catch (error) {
            setError('Error Fetching Pokemons, Please try again later!')
            console.log(error)
        }
        finally{
            setLoading(false)
        }
      }
      await fetchPokemons(paginator.previous)
    }
   }


   // when pagination buttons are clicked scroll to the top 

   if(pokemons && scrollPokemonsIntoView.current){
    scrollPokemonsIntoView.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}


// get and set the clicked pokemon's details

   async function getPokemonDetails(id){
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemonData = await res.json()
            const stats = pokemonData.stats.reduce((acc, stat) => {
                acc[stat.stat.name] = stat.base_stat;
                return acc;
              }, {});
            setPokemonDetails({
                name: pokemonData.name,
                id: pokemonData.id,
                types: pokemonData.types.map((t) => t.type.name),
                weight: pokemonData.weight / 10, // Convert to kg
                height: pokemonData.height / 10, // Convert to m
                abilities: pokemonData.abilities.map((a) => a.ability.name),
                stats: stats, 
              });
              setIsModalOpen(true)
              if(dialog.current){
                dialog.current.showModal()
                dialog.current.scrollIntoView({
                    behavior: "smooth"
                })
              }
        } catch (error) {
            console.log(error.message)
        }
   }

   // handle close modal functionality

   function closeModal(){
    setIsModalOpen(false)
    dialog.current.close()
   }


   // reset app when the logo is clicked

   const resetApp = async () => {
    setLoading(true)
    setError('')
    setInput('')
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        const data = await res.json()
        const paginaton = {next: data.next, previous: data.previous}
        setPaginator(paginaton)
        setPokemons(data.results)
    } catch (error) {
        setError('Error Fetching Pokemons, Please try again later!')
        console.log(error)
    }
    finally{
        setLoading(false)
    }
}
  

  return (
    <div className="bg-emerald-400 p-6 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center mb-12">
      <Header ref={scrollPokemonsIntoView} resetApp={resetApp} />
      <Filter input={input} setInput={setInput}/>
      </div>

      {isModalOpen && <DetailsModal closeModal={closeModal} ref={dialog} pokemonDetails={pokemonDetails}/> }

      <Pokemons 
        paginator={paginator} 
        handleNext={handleNext} 
        handlePrevious={handlePrevious} 
        pokemons={filteredPokemons} error={error} 
        loading={loading}
        getPokemonDetails={getPokemonDetails}
      />

    </div>
  )
}

export default App
