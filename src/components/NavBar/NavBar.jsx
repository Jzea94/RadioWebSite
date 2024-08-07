import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/LogoLR.jpeg'

function NavBar () {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo de la emisora romantica' />
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
