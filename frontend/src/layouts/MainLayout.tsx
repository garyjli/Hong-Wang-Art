import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'

function MainLayout() {
  // Provides the current router location
  const location = useLocation()

  return (
    <div key={location.key} className='min-h-svh'>
      {/*
        The key allows React to remount the Header component whenever
        the current router location changes. This includes remounting
        when navigating from a URL to the same URL. To only remount
        when the path explicitly changes, use 'location.pathname'.
      */}
      <Header />

      <div className="pt-16 pb-32 page-fade-in">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
