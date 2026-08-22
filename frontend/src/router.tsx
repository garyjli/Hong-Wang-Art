import { createBrowserRouter } from 'react-router'
import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/test',
        element: <App />
    }
])

export default router