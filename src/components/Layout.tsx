import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import NewsTicker from './NewsTicker'

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Catalogue', path: '/catalogue' },
  { label: 'Hall of Fame', path: '/hall-of-fame' },
  { label: 'Communauté', path: '/communaute' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="site-header">
        <div className="site-header__bar">
          <div className="brand" onClick={() => navigate('/')}>
            <img src={logo} className="brand__logo" />
            <span className="brand__name">PixelVault</span>
          </div>

          <div className="nav">
            {navItems.map((item) => (
              <div key={item.path} className="nav__item" onClick={() => navigate(item.path)}>
                {item.label}
              </div>
            ))}
          </div>

          <div className="icon-btn" onClick={() => navigate('/catalogue')}>
            🔍
          </div>
        </div>
        <NewsTicker />
      </div>

      <div className="site-main">
        <Outlet />
      </div>

      <div className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <span className="footer-title">PixelVault</span>
            <p>La boutique et le musée communautaire des jeux vidéo rétro.</p>
          </div>

          <div className="site-footer__col">
            <span className="footer-title">Liens</span>
            <div className="nav__item" onClick={() => navigate('/catalogue')}>
              Catalogue
            </div>
            <div className="nav__item" onClick={() => navigate('/hall-of-fame')}>
              Hall of Fame
            </div>
            <div className="nav__item" onClick={() => navigate('/contact')}>
              Contact
            </div>
          </div>

          <div className="site-footer__col">
            <span className="footer-title">Newsletter rétro</span>
            <form onSubmit={(event) => event.preventDefault()}>
              <input id="email" type="email" placeholder="Votre email" className="input" />
              <div className="btn btn--small" onClick={() => {}}>
                S'abonner
              </div>
            </form>
          </div>
        </div>

        <p className="copyright">© 2026 PixelVault : Fan project pédagogique, aucune revente de jeux réels.</p>
      </div>
    </div>
  )
}
