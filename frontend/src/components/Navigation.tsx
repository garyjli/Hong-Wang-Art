import { NavLink } from 'react-router'
import HomeIcon from '../assets/home.svg'
import CartIcon from '../assets/cart.svg'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <div className="menu">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <img className="home-favicon-img" src={HomeIcon} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/featured">featured</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">gallery</NavLink>
          </li>
          <li>
            <NavLink to="/info">info</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img className="cart-favicon-img" src={CartIcon} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
