import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'

function MainLayout() {
  // Provides the current router location
  const location = useLocation()

  return (
    <div className='min-h-svh'>
      {/*
        The key allows React to remount the Header component whenever
        the current router location changes. This includes remounting
        when navigating from a URL to the same URL. To only remount
        when the path explicitly changes, use 'location.pathname'.
      */}
      <Header key={location.key} />
      <Outlet />
    </div>
  )
}

export default MainLayout
