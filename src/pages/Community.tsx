import { threads } from '../data/forum'

export default function Community() {
  return (
    <div className="community">
      <h1>Communauté</h1>
      <p>Astuces, souvenirs d'arcade et records : la discussion continue sur le forum PixelVault.</p>

      <div className="threads">
        {threads.map((thread) => (
          <div key={thread.id} className="thread">
            <div className="thread__title">{thread.title}</div>
            <p className="thread__excerpt">{thread.excerpt}</p>
            <div className="thread__meta">
              Par {thread.author} · {thread.date} · {thread.replies} réponses
            </div>
            <div className="nav__item nav__item--link" onClick={() => {}}>
              Cliquez ici
            </div>
          </div>
        ))}
      </div>

      <section className="section">
        <h4>Nouveau sujet</h4>
        <form onSubmit={(event) => event.preventDefault()} className="new-thread-form">
          <input type="text" placeholder="Pseudo" className="input" />
          <input type="text" placeholder="Titre du sujet" className="input" />
          <textarea placeholder="Votre message" className="input" rows={4} />
          <div className="btn btn--primary" onClick={() => {}}>
            Publier
          </div>
        </form>
      </section>
    </div>
  )
}
