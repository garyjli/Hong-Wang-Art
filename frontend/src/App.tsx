import { Outlet } from 'react-router'
import Header from './components/Header'

function App() {
  return (
    <div className="w-full m-0 p-0 box-border min-h-svh">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
