import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import GameDetail from './pages/GameDetail'
import HallOfFame from './pages/HallOfFame'
import Community from './pages/Community'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'catalogue', element: <Catalogue /> },
      { path: 'catalogue/:slug', element: <GameDetail /> },
      { path: 'hall-of-fame', element: <HallOfFame /> },
      { path: 'communaute', element: <Community /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
