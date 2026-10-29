import { useState } from 'react'

export default function Contact() {
  const [messageError, setMessageError] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (message.trim() === '') {
      setMessageError(true)
      return
    }
    setMessageError(false)
    setSent(true)
  }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Une question sur une commande, une suggestion de jeu à ajouter ? Écrivez-nous.</p>

      {sent && <p className="success">Message envoyé, merci !</p>}

      <form onSubmit={(event) => event.preventDefault()} className="contact-form">
        <input id="email" type="email" placeholder="Votre email" className="input" />
        <input type="text" placeholder="Sujet" className="input" />
        <textarea
          placeholder="Votre message"
          className={`input ${messageError ? 'input--error' : ''}`}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="btn btn--primary" onClick={handleSubmit}>
          Envoyer
        </div>
      </form>
    </div>
  )
}
