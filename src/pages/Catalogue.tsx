import { useMemo, useState } from 'react'
import { games } from '../data/games'
import GameCard from '../components/GameCard'

export default function Catalogue() {
  const [genre, setGenre] = useState('all')
  const genres = useMemo(() => Array.from(new Set(games.map((g) => g.genre))), [])

  const filtered = genre === 'all' ? games : games.filter((g) => g.genre === genre)

  return (
    <div className="catalogue">
      <h1>Catalogue</h1>
      <p>Toute notre sélection de classiques, de l'arcade des années 70 aux consoles 16 bits.</p>

      <div className="filter-bar">
        <span className="filter-label">Filtrer par genre</span>
        <select className="input" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="all">Tous les genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="games-grid">
        {filtered.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  )
}
