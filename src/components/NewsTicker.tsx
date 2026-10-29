const news = [
  'Le stock de Donkey Kong (arcade) vient d\'être écoulé !',
  'Nouveau : fiche complète de Sonic the Hedgehog ajoutée au catalogue.',
  'Le tournoi Street Fighter II de fin de mois affiche déjà complet.',
  'Hall of Fame mis à jour avec les derniers records communiqués par les membres.',
]

export default function NewsTicker() {
  return (
    <div className="news-ticker">
      <div className="news-ticker__track">
        {news.map((item, index) => (
          <span key={index} className="news-ticker__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
