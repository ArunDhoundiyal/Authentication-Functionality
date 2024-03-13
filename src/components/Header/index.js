import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <p className="home">
      <Link className="link-style" to="/">
        Home
      </Link>
    </p>
    <p>
      <Link className="link-style" to="/about">
        About
      </Link>
    </p>
  </nav>
)

export default Header
