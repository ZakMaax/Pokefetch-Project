import logo from '../assets/logo.svg'

export default function Header({ ref }) {


  return (
     <div ref={ref} className="flex items-center text-gray-700">
        <img src={logo} alt="Pokemon Logo" className='w-20 h-20 object-cover'/>
        <h1 className='font-bold text-2xl md:text-4xl'>Pokefetch</h1>
    </div>

  )
}