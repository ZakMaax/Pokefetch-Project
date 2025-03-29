import logo from '../assets/logo.svg'

export default function Header({ ref, resetApp }) {


  return (
     <a onClick={resetApp} ref={ref} className="flex items-center text-gray-700 cursor-pointer">
        <img src={logo} alt="Pokemon Logo" className='w-20 h-20 object-cover'/>
        <h1 className='font-bold text-2xl md:text-4xl'>Pokefetch</h1>
    </a>

  )
}