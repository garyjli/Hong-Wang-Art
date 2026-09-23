import { Link } from 'react-router'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex flex-col gap-6 items-center pt-16 pb-4'>
      {/* "Hong Wang" Title */}
      <div className='overflow-hidden'>
        <Link to='/' className='block no-underline reveal-up'>
          <h3
            className={`
              text-black text-[4rem] uppercase transition-opacity
              duration-250 ease-[ease] font-light hover:opacity-50
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
