import { NavLink } from 'react-router'
import HomeIcon from '../assets/home.svg'
import CartIcon from '../assets/cart.svg'

/**
 * This is defined outside of Navigation(), so that it's only created once
 * when the module loads instead of evaluating it on every render.
 */
const textLink = `
  text-[1.6rem] font-['Raleway',sans-serif] font-light 
  transition-colors duration-250 ease-[ease] hover:text-[lightskyblue]
`

function Navigation() {
  return (
    <div className="p-0 m-0">
      <nav>
        <ul className="flex justify-center items-center list-none m-0 p-0 gap-20">
          <li>
            <NavLink to="/">
              <img
                className="w-9 h-9 transition-opacity duration-250 ease-[ease] hover:opacity-50"
                src={HomeIcon}
                alt='Home'
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => 
                `${textLink} ${isActive ? 'underline text-[lightskyblue]' : 'no-underline text-black'}`
              }
            >
              gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/info"
              className={({ isActive }) => 
                `${textLink} ${isActive ? 'underline text-[lightskyblue]' : 'no-underline text-black'}`
              }
            >
              info
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={textLink}>
              login
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img
                className="w-9 h-9 transition-opacity duration-250 ease-[ease] hover:opacity-50"
                src={CartIcon}
                alt='Cart'
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
