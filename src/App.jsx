import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(1)

  console.log(name)

  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const decrementNumber = () => {
    setNumber((prevNumber) => prevNumber - 1)
  }

  return (
    <>
      <h1>Meu nome é {name}.</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Digite seu nome'
      />

      <p>Número: {number}</p>
      <div className='botoes'>
        <button onClick={incrementNumber}>Acrescentar número</button>

        <button onClick={decrementNumber}>Decrementar número</button>
      </div>

      <div></div>
    </>
  )
}

export default App
