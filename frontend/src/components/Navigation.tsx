import { NavLink } from 'react-router'
import HomeIcon from '../assets/home.svg'
import CartIcon from '../assets/cart.svg'

/**
 * This is defined outside of Navigation(), so that it's only created once
 * when the module loads instead of evaluating it on every render.
 */
const textLink = `
  text-black no-underline text-[1.6rem] font-['Raleway',sans-serif] font-light 
  [transition:scale_200ms_ease,color_250ms_ease] hover:scale-[1.1] hover:text-[lightskyblue] 
  border border-black px-4 py-1 rounded-full w-auto flex justify-center items-center
`

function Navigation() {
  return (
    <div className="p-0 m-0">
      <nav>
        <ul className="flex justify-center items-center list-none m-0 p-0 gap-14">
          <li>
            <NavLink to="/">
              <img
                className="w-11 h-11 transition-transform duration-200 ease-[ease] hover:scale-[1.15]" 
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
                className="w-11 h-11 transition-transform duration-200 ease-[ease] hover:scale-[1.1]" 
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
