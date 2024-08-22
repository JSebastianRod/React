
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      console.log(search, isFirstInput)
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar solo numeros')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener mas de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {search, setSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies( {search, sort} )

 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name='query' type="text" placeholder='Avenger, Batman, Anime...'/>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      
      <main>
        {
          loading ? <p>Cargando... </p> : null
        }
        <Movies movies = {movies}/>
      </main>
    </div>
    
  )
}

export default App
