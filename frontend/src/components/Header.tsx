import { Link } from 'react-router'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex flex-col gap-7 items-center pt-16 pb-4'>
      {/* "Hong Wang" Title */}
      <div className='p-0 m-0'>
        <Link to='/' className='no-underline'>
          <h3
            className={`
              text-black text-[4rem] uppercase transition-opacity duration-250 ease-[ease] 
              font-['Raleway',sans-serif] font-light p-0 m-0 hover:opacity-50
            `}
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
