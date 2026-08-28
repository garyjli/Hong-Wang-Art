import { createBrowserRouter } from 'react-router'
import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: App },
            { path: 'gallery', Component: App },
            { path: 'info', Component: App }
        ]
    }
])

export default router
