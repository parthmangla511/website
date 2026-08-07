import '../App.css'
import '../css/navbar.css'
import logo from '../images/logo.jpeg'

function Navbar() {
  return (
    <nav id="navbar">
      <a id="logo">
        <img src={logo} alt="Geek Room JIMS logo" />
        <span>Geek Room JIMS</span>
      </a>
      <ul>
        <li className="item">
          <a>Home</a>
        </li>
        <li className="item">
          <a>Events</a>
        </li>
        <li className="item">
          <a>Achievements</a>
        </li>
        <li className="item">
          <a>Contact</a>
        </li>
        <li className="item special">
          <a>Join Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar