import { Link } from 'react-router'
import Navigation from './Navigation'
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/"><h3>Hong Wang</h3></Link>
      </div>

      <Navigation />
    </header>
  )
}

export default Header
