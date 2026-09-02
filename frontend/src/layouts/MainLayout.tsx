import { Outlet } from 'react-router'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className='min-h-svh'>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
