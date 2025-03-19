import React from 'react'
import '../styles/Navbar.css'
import Logo from '../Reusable/Logo.jsx'
import {faAddressBook} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {

    const navItems = [
        {label: 'Home', path: '/'},
        {label: "Explore", path: '/explore'},
        {label: "Challenges", path: '/challenges'},
        {label: "Community", path: '/community'},
    ]

  return (
    <>
        <nav className='nav-container'>
            <div className='nav-wrapper'>

                <div className="navBar-left">
                    <div className='logo'>
                        <FontAwesomeIcon icon={faAddressBook} />
                    </div>
                    <ul className='navBar-item'>
                        {navItems.map((item) => (
                            <li key={item.path}><a href={item.path}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="navBar-right">
                    <input type="text" placeholder='Search all books...'/>
                    <div className='signIn'>

                    </div>
                </div>
    
            </div>
        </nav>
    </>
  )
}

export default NavBar;