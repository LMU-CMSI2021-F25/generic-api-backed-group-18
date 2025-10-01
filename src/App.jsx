import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const[data, setData] = useState([])
  const[category, setCategory] = useState(null)

  useEffect(() => {
    if (!category) return
    let endpoint = ""
    if(category == "characters") endpoint = "https://rickandmortyapi.com/api/character"
    if (category == "locations") endpoint = "https://rickandmortyapi.com/api/location"
    if (category == "episodes") endpoint = "https://rickandmortyapi.com/api/episode"
  }, [category])

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="card">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>
        {menuOpen && (
          <div className="menu">
            <button onClick={()=>setCategory("characters")}>Characters</button>
            <button onClick={() => setCategory("locations")}>Locations</button>
            <button onClick={() => setCategory("episodes")}>Episodes</button>
          </div>
        )}
      </div>
      <p className="read-the-docs">
        Group 18 API
      </p>
    </>
  )
}

export default App
