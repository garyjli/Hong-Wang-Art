import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Info from './pages/Info'
import Cart from './pages/Cart'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: 'gallery', Component: Gallery },
      { path: 'info', Component: Info },
      { path: 'cart', Component: Cart }
    ]
  },
  {
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login }
    ]
  }
])

export default router
