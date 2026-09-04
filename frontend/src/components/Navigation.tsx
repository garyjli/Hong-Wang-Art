import { NavLink } from 'react-router'
import HomeIcon from '../assets/home.svg'
import CartIcon from '../assets/cart.svg'

/**
 * This is defined outside of Navigation(), so that it's only created once
 * when the module loads instead of evaluating it on every render.
 */
const textLink = `
  text-black no-underline text-[1.7rem] font-['Raleway',sans-serif] font-light 
  transition-colors duration-250 ease-[ease] hover:text-[lightskyblue]
`

function Navigation() {
  return (
    <div className="p-0 m-0">
      <nav>
        <ul className="flex justify-center items-center list-none m-0 p-0 gap-14">
          <li>
            <NavLink to="/">
              <img
                className="w-10 h-10" 
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
                className="w-10 h-10" 
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
