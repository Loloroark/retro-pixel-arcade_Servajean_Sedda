import { useNavigate } from 'react-router-dom'
import { games } from '../data/games'
import GameCard from '../components/GameCard'

export default function Home() {
  const navigate = useNavigate()
  const featured = games.slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__title">PixelVault</div>
        <p className="hero__subtitle">
          Le musée et la boutique communautaire dédiés aux jeux vidéo rétro, de l'arcade des années 70
          aux consoles 16 bits des années 90.
        </p>
        <div className="btn btn--primary" onClick={() => navigate('/catalogue')}>
          Découvrir le catalogue
        </div>
      </section>

      <section className="section">
        <h3>Jeux à la une</h3>
        <div className="games-grid">
          {featured.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <h3>Pourquoi PixelVault ?</h3>
        <div className="features">
          <div className="feature">
            <div className="feature__title">Collection vérifiée</div>
            <p>Des fiches détaillées pour chaque titre, de 1978 à 1991.</p>
          </div>
          <div className="feature">
            <div className="feature__title">Communauté active</div>
            <p>Un forum pour échanger astuces, records et souvenirs d'arcade.</p>
          </div>
          <div className="feature">
            <div className="feature__title">Hall of Fame</div>
            <p>Les meilleurs scores communiqués par les membres de PixelVault.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
