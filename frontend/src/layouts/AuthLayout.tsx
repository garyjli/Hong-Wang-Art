import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <main className='grid min-h-svh place-items-center'>
      <Outlet />
    </main>
  )
}

export default AuthLayout
