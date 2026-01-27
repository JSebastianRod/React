import './App.css'
import { useEffect, useState } from 'react'
import { getCharacter, getEpisode } from 'rickmortyapi'

function App() {
  const[num1, setNum1] = useState(0)
  const[num2, setNum2] = useState(0)
  const[respuesta,setRespuesta] = useState(1)
  const[operacion,setOperacion] = useState(true)
  const[characters,setCharacters] = useState()
  const[error, setError] = useState()
  const[booleanError, setBooleanError] = useState(true)

  const[episodio, setEpisodio] = useState(0)
  const[epCharacters, setEpCharacters] = useState()

  const handleOnChangeNum1 = (event) => {
    const number1 = event.target.value
    setNum1(number1)
  }

  const handleOnChangeNum2 = (event) => {
    const number2 = event.target.value
    setNum2(number2)
  }

  const handleOnClick = () => {
    setOperacion(!operacion)
  }

  const handleResult = async () => {
    if (operacion) {
      setRespuesta(parseInt(num1) + parseInt(num2))
    } else {
      setRespuesta(parseInt(num1) - parseInt(num2))
    }
    if (respuesta <= 0) {
      setError('No hay ningun personaje con este id')
      setBooleanError(false)
      return
    }
    setError()
    const personaje = await getCharacter(respuesta)
    setCharacters(personaje.data)
    console.log(characters)    
  }
  
  // const handleOnChangeEp = (event) => {
  //   const ep = event.target.value
  //   setEpisodio(parseInt(ep))
  // }
  // const handleEpisode = async () => {
  //   const charactersByEpisode = await getEpisode(parseInt(episodio))
  //   const data = charactersByEpisode.data
  //   const allCh = data.characters
  //   console.log(allCh)
  // }

  return (
    <>
    <div className='page'>
      <h1>Web Personajes Rick y Morty</h1>
      <header>
          <div className='id'>
            <h2>Busqueda por Id</h2>
            <input className='input' type="number" name="num1" id = "num1" onChange={handleOnChangeNum1}/>
            <input className='input' type="number" name="num2" id= "num2" onChange={handleOnChangeNum2}/>
            <button onClick={handleOnClick}>Change Operation + or -</button>
            <button onClick={handleResult}>Submit</button>
            <h3>Current Operation {operacion ? 'Suma' : 'Resta'}</h3>
          </div>

          <div className='Episodio'>
            <h2>Busqueda por episodio</h2>
            {/* <input type="number" name='ep' id='ep' onChange={handleOnChangeEp}/> */}
            {/* <button id='ep' onClick={handleEpisode}>Submit</button> */}
            <h1></h1>
          </div>
          
      </header>
      <main>
        
        <ul className='characters'>
          <li key={characters?.id}>
            <img className='imgPerso' src={characters?.image} alt={`Imagen del personaje  ${characters?.name}`} />
            <div className='character-data'>
              <h3>{characters?.name}</h3>
              <h4>{characters?.status} - {characters?.species}</h4> 
              <p>Last known location</p>
              <p>{characters?.gender}</p>
            </div>
          </li>
        </ul>
        {error && <p className='error'>{error}</p>}
      </main>
    </div>
    </>
  )
}
export default App
