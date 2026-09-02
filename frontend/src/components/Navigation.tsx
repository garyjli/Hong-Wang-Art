import { NavLink } from 'react-router'
import HomeIcon from '../assets/home.svg'
import CartIcon from '../assets/cart.svg'

/**
 * This is defined outside of Navigation(), so that it's only created once
 * when the module loads instead of evaluating it on every render.
 */
const textLink = `
  block text-black no-underline text-[1.6rem] font-['Raleway',sans-serif] font-light 
  [transition:scale_200ms_ease,color_250ms_ease] hover:scale-[1.1] hover:text-[lightskyblue]
`

function Navigation() {
  return (
    <div className="pt-0 pb-10 m-0">
      <nav>
        <ul className="flex justify-center list-none m-0 p-0 gap-18">
          <li>
            <NavLink to="/">
              <img 
                className="w-8 h-8 transition-transform duration-200 ease-[ease] hover:scale-[1.15]" 
                src={HomeIcon} 
                alt='Home'
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={textLink}>
              gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/info" className={textLink}>
              info
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img 
                className="w-8 h-8 transition-transform duration-200 ease-[ease] hover:scale-[1.1]" 
                src={CartIcon} 
                alt='Cart'
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={textLink}>
              login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
