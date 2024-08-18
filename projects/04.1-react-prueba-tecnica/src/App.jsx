import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT = 'https://cataas.com/'
export function App() {
  const[fact, setFact] = useState()
  const[imgUrl,setImgUrl] = useState()

  //Recuperar el dato curioso cada vez que se recarga la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  //Recuperar la imagen cada vez que tenemos un dato curioso nuevo

  useEffect(() => {
    if(!fact) return
    const threeWords = fact.split(' ').slice(0,3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeWords}?fontSize=50&fontColor=red`)    
      .then(response => {
        const { url } = response
        setImgUrl(url)
      })
  },[fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact} </p>}
      <img src={`${imgUrl}`} alt={`Image extracted using tahe first three words for  ${fact}`}/>
    </main>
    
  )
}

export default App
