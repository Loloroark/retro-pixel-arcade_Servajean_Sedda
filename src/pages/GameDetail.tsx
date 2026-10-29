import { useParams, Link } from 'react-router-dom'
import { getGameBySlug } from '../data/games'
import { reviews } from '../data/forum'

export default function GameDetail() {
  const { slug } = useParams()
  const game = getGameBySlug(slug ?? '')

  if (!game) {
    return (
      <div className="game-detail">
        <h1>Jeu introuvable</h1>
        <p>
          Retournez au <Link to="/catalogue">catalogue</Link>.
        </p>
      </div>
    )
  }

  const gameReviews = reviews.filter((r) => r.gameSlug === game.slug)

  return (
    <div className="game-detail">
      <div className="game-detail__hero">
        <img src={game.cover} className="game-detail__cover" />
        <div className="game-detail__info">
          <h1>{game.title}</h1>
          <p className="game-detail__meta">
            {game.year} · {game.studio} · {game.platform} · {game.genre}
          </p>
          <p className="game-detail__description">{game.longDescription}</p>

          <div className="game-detail__purchase">
            <span className="price price--big">{game.price}</span>
            <div className="btn btn--primary" onClick={() => {}}>
              Ajouter au panier
            </div>
          </div>

          <p>
            Besoin d'aide pour ce titre ? <a href="#">Cliquez ici</a>.
          </p>
        </div>
      </div>

      <section className="section">
        <h4>Avis des joueurs</h4>
        {gameReviews.length === 0 && <p>Aucun avis pour le moment.</p>}
        <div className="reviews">
          {gameReviews.map((review) => (
            <div key={review.id} className="review">
              <div className="review__author">{review.author}</div>
              <div className="review__rating">{'★'.repeat(review.rating)}</div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
