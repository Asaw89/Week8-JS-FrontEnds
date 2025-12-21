import { useState, useEffect } from 'react'
import { getAllMusicians } from './api'

function App() {
  const [musicians, setMusicians] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getAllMusicians()
      setMusicians(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Find <span style={{color: '#e94560'}}>Music</span> You'll Love</h1>
      <p style={{textAlign: 'center'}}>Search through {musicians.length}+ artists</p>

      <div className="cards-container">
        {musicians.map(musician => (
          <div className="card" key={musician.id}>
            <img
              src={musician.image_url || `https://picsum.photos/seed/${musician.id}/300/200`}
              alt={musician.musician_name}
            />
            <h3>{musician.musician_name}</h3>
            <div className="card-info">
              <span className="rating">⭐ {musician.year_formed}</span>
              <span>•</span>
              <span>{musician.genre}</span>
            </div>
            <button className="btn btn-primary">View Albums</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App