import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'gallery', Component: App },
            { path: 'info', Component: App }
        ]
    }
])

export default router
