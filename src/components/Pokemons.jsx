
export default function Pokemons({ pokemons, loading, error, paginator, handleNext, handlePrevious, getPokemonDetails}) {

   const PokemonsDisplay = pokemons.map((pokemon) => { 
    const pokemonId = pokemon.url.split('/')[6]
    const imageURL = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    return(
        <a onClick={() => getPokemonDetails(pokemonId)} key={pokemonId} className="cursor-pointer flex flex-col items-center justify-center p-2 text-gray-700 max-w-xs border border-red-400 rounded-xl shadow-2xl hover:scale-105 hover:border-2 transition-all duration-200">
            <p className='font-bold text-md text-right'>{pokemonId}</p>
            <img src={imageURL} alt={pokemon.name} className="object-contain w-36 h-36 md:w-60 md:h-60"/>
            <p className='font-bold text-lg capitalize'>{pokemon.name}</p>
        </a>
    )
})


 return (

    <div>

        {/* Display Loading Spinner when loading */}

        { 
            loading && 
            <div role="status" className='flex items-center justify-center mt-50'>
                <svg aria-hidden="true" className="w-30 h-30 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        }

        {/* Display Error message if there is an error */}

        {
            error && 
            <div className="flex items-center justify-center mt-30 md:mt-50 my-auto p-6 mb-4 text-sm text-red-800 rounded-lg bg-red-200 shadow-2xl max-w-xl mx-auto" role="alert">
                <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium md:text-xl">{error}</span>
                </div>
            </div>

        }

        {/* Display Pokemons */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PokemonsDisplay}
        </div>

        {
            pokemons.length > 0 && paginator &&

            <div className="mt-8">
                <ul className="flex items-center justify-center text-lg">
                    <li>
                        <button onClick={handlePrevious} disabled={!paginator.previous} className="px-4 h-10 ms-0 leading-tight text-gray-500  border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                    </li>
                    <li>
                        <button onClick={handleNext} disabled={!paginator.next} className="px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </div>
        }
    </div>

 );
}