import { useState, useEffect } from 'react'
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
    fetch(endpoint)
    .then(res=>res.json())
    .then(result=>setData(result.results))
    .catch(err=>console.error(err));
  }, [category]);

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="card">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>
        {menuOpen && (
          <div className="menu">
            <button className="menu-item" onClick={()=>setCategory("characters")}>Characters</button>
            <button className="menu-item" onClick={() => setCategory("locations")}>Locations</button>
            <button className="menu-item" onClick={() => setCategory("episodes")}>Episodes</button>
          </div>
        )}
      </div>
      <div className='data-display'>
        {data && data.length > 0 ? (
          <ol>
            {data.map((item)=>(
              <li key={item.id}>{item.name || item.title}</li>
            ))}
          </ol>
        ):(
          <p>No data loaded</p>
        )
        }
      </div>
    </>
  )
}

export default App
