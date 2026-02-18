
import './Navbar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

    return (
        <div id='nav'>
        <nav className='navbar'>
                  <ul className='nav-list'>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/">Hem</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/About">Om mig</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/Projects">Projekt</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink active" : "navLink"} to="/cv">CV</NavLink></li>
                  </ul>
        </nav>

                <nav className='navbar-mobile'>
                    
                {!menuOpen && (
                <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>menu</span>
                )}

                {menuOpen && (
                  <span className="material-symbols-outlined close-icon" onClick={toggleMenu}>close</span>
                )}

                {menuOpen && (
                  <ul className="mobile-menu">
                    <li><NavLink className={({ isActive }) => isActive ? "navLink-mobile active" : "navLink-mobile"} to="/" onClick={toggleMenu}>Hem</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink-mobile active" : "navLink-mobile"} to="/About" onClick={toggleMenu}>Om mig</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink-mobile active" : "navLink-mobile"} to="/Projects" onClick={toggleMenu}>Projekt</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "navLink-mobile active" : "navLink-mobile"} to="/cv" onClick={toggleMenu}>CV</NavLink></li>
                  </ul>
                )}

        </nav>
        </div>
    );
}

export default Navbar;