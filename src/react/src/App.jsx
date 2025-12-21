import { useState, useEffect } from 'react'
import { getAllMusicians, getAlbumsByMusicianID } from './api'

function App() {
  const [musicians, setMusicians] = useState([])
  const [selectedMusician, setSelectedMusician] = useState(null)
  const [albums, setAlbums] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await getAllMusicians()
      setMusicians(data)
    }
    fetchData()
  }, [])

  async function handleViewAlbums(musician) {
    const albumsData = await getAlbumsByMusicianID(musician.id)
    setAlbums(albumsData || [])
    setSelectedMusician(musician)
  }

  function handleBack() {
    setSelectedMusician(null)
    setAlbums([])
  }

  // Filter musicians based on search term
  const filteredMusicians = musicians.filter(musician =>
    musician.musician_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    musician.genre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // If a musician is selected, show their albums
  if (selectedMusician) {
    return (
      <div>
        <h1>🎵 {selectedMusician.musician_name}'s Albums</h1>
        <button className="btn btn-primary" onClick={handleBack}>
          ← Back to Musicians
        </button>
        <p style={{textAlign: 'center'}}>Found {albums.length} albums</p>

        <div className="cards-container">
          {albums.map(album => (
            <div className="card" key={album.id}>
              <h3>{album.title}</h3>
              <p>Tracks: {album.number_of_tracks}</p>
              <p>Label: {album.label}</p>
              <p>{album.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default view: show all musicians
  return (
    <div>
      <h1>Find <span style={{color: '#e94560'}}>Music</span> You'll Love</h1>
      <p style={{textAlign: 'center'}}>Search through {musicians.length}+ artists</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by artist name or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <p style={{textAlign: 'center'}}>Showing {filteredMusicians.length} artists</p>

      <div className="cards-container">
        {filteredMusicians.map(musician => (
          <div className="card" key={musician.id}>
            <img
              src={musician.image_url || `https://placehold.co/300x200/1a1a2e/e94560?text=${encodeURIComponent(musician.musician_name)}`} 
              alt={musician.musician_name}
            />
            <h3>{musician.musician_name}</h3>
            <div className="card-info">
              <span className="Established">📅 {musician.year_formed}</span>
              <span>•</span>
              <span>{musician.genre}</span>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleViewAlbums(musician)}
            >
              View Albums
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App