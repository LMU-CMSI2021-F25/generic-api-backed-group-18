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
      <div className="image-container">
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.9CbwKa38tn7S23VkCHE7PQHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=5cf95fbc4a6db24096bad7567f0ea034d7f5993bfff677ff00ebd14b50de6b23&ipo=images"
          alt="Rick and Morty Image"
          className="image"
        />
      </div>
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
