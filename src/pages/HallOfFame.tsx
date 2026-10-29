import { games } from '../data/games'

export default function HallOfFame() {
  const ranked = [...games].sort((a, b) => b.highScore.score - a.highScore.score)

  return (
    <div className="hall-of-fame">
      <h1>Hall of Fame</h1>
      <p>Les meilleurs scores communiqués par la communauté PixelVault, toutes bornes confondues.</p>

      <table className="score-table">
        <tbody>
          <tr>
            <td>Jeu</td>
            <td>Joueur</td>
            <td>Score</td>
            <td>Année</td>
          </tr>
          {ranked.map((game) => (
            <tr key={game.slug}>
              <td>{game.title}</td>
              <td>{game.highScore.pseudo}</td>
              <td>{game.highScore.score.toLocaleString('fr-FR')}</td>
              <td>{game.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
