import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Info from './pages/Info'
import Cart from './pages/Cart'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'gallery', Component: Gallery },
      { path: 'info', Component: Info },
      { path: 'cart', Component: Cart },
      { path: 'login', Component: Login }
    ]
  }
])

export default router
