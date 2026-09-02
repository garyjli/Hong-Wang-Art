import { Link } from 'react-router'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='shadow-md'>
      <div className='flex justify-center pt-6 pb-8 overflow-y-hidden'>
        <Link to='/' className='no-underline'>
          <h3 
            className="
              text-black text-[4rem] uppercase font-['Raleway',sans-serif] font-light
              p-0 m-0 transition-transform duration-200 ease-[ease] hover:scale-[1.04]
            "
          >
            Hong Wang
          </h3>
        </Link>
      </div>

      <Navigation />
    </header>
  )
}

export default Header
