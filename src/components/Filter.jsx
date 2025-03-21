export default function Filter({ input, setInput}) { 

  function handleInput(e){
    setInput(e.target.value)
  }

  return (
    <div className="flex items-center">
      <input value={input} onChange={handleInput} type="text" className="w-full px-5 py-2 border border-gray-700 rounded-md focus:border-2 focus:outline-hidden" placeholder="Filter by name or by Id" />
    </div>
  )
}