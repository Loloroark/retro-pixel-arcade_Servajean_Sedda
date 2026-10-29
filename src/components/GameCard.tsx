import { useNavigate } from 'react-router-dom'
import type { Game } from '../data/games'

export default function GameCard({ game }: { game: Game }) {
  const navigate = useNavigate()

  return (
    <div className="game-card">
      <img src={game.cover} className="game-card__cover" alt="image" />
      <div className="game-card__body">
        <div className="game-card__title">{game.title}</div>
        <div className="game-card__meta">
          {game.year} · {game.platform}
        </div>
        <div className="game-card__stock">
          <span className={`dot dot--${game.stock === 'disponible' ? 'ok' : 'ko'}`} />
          <span className="price">{game.price}</span>
        </div>
        <div className="nav__item nav__item--link" onClick={() => navigate(`/catalogue/${game.slug}`)}>
          En savoir plus
        </div>
      </div>
    </div>
  )
}
