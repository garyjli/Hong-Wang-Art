import { Link } from 'react-router'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex items-center justify-between pl-14 pr-24 py-4 shadow-md'>
      {/* "Hong Wang" Title */}
      <div className='p-0 m-0'>
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
