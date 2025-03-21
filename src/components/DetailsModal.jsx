import { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import { LuWeight } from "react-icons/lu";
import { GiBodyHeight } from "react-icons/gi"


const DetailsModal = forwardRef(function DetailsModal({ pokemonDetails, closeModal}, ref) {
  
    const imageURL = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg` 

  return (
    <dialog ref={ref} className="m-auto w-[80%] md:w-[70%] p-5 md:p-4 relative flex flex-col justify-center items-center bg-gray-800 rounded-xl shadow-2xl text-white box-content">
    <div className="space-y-2">
        {/* Close Button */}
        <div className="absolute top-2 right-2">
            <button onClick={closeModal} className="text-3xl cursor-pointer hover:text-gray-400 transition-colors">
                <IoClose />
            </button>
        </div>

        {/* Pokemon Image */}
        <img src={imageURL} alt="" className="absolute object-center left-1/2 transform -translate-x-1/2 -top-20 w-32 h-32 md:w-40 md:h-40" />

        {/* Pokemon Name and ID */}
        <h1 className="text-xl font-medium text-center mt-16 md:mt-20">{pokemonDetails.name}</h1>
        <h4 className="text-lg text-center text-gray-300">#{pokemonDetails.id}</h4>
    </div>

    {/* Stats Section */}
    <div className="flex justify-between items-center gap-6 md:gap-36 mt-10">
        <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center justify-center gap-2">
                <LuWeight className="text-2xl" /> <span className="text-xl">{pokemonDetails.weight}kg</span>
            </p>
            <p className="text-gray-300">Weight</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex items-center justify-center gap-2">
                <GiBodyHeight className="text-2xl" /> <span className="text-xl">{pokemonDetails.height}m</span>
            </p>
            <p className="text-gray-300">Height</p>
        </div>
    </div>

    {/* Description */}
    <h4 className="text-2xl mt-5 mb-2 text-sky-400">Abilities</h4>
    {pokemonDetails.abilities.map(ability => (
        <div key={ability}>
            <p className="mb-2 capitalize text-center text-md text-gray-200 max-w-lg">
                - {ability}
            </p>
        </div>

    ))}

    {/* Ability stats Progressive Bars  */}
    <div className="w-full max-w-lg space-y-3">
        {Object.entries(pokemonDetails.stats).map(([statName, statValue]) => (
            <div key={statName} className="flex gap-2 justify-center items-center">
            <p className="text-nowrap capitalize">{statName.replace("-", " ")}</p>
            <div className="w-full h-4 bg-gray-700 rounded-full">
                <div className="h-full text-xs text-center bg-blue-500 rounded-full" style={{ width: `${(statValue / 100) * 100}%` }}>{statValue}%</div>
            </div>
            </div>
        ))}
    </div>
</dialog>
  )
});

export default DetailsModal;