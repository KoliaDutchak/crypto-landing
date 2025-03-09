import { NavLink, Link } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import'./HeaderNavigation.css'
import logo from './../../../assets/images/logo.png'
import { useState } from 'react'


const HeaderNavigation = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='header-navigation'>

            <div className='logo'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                <Link to='/' style={{textDecoration: 'none'}}><h1 className='logo-title'>Crypton</h1></Link>
            </div>

            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={menuOpen ? 'open' : ''}>
                <NavLink className='nav-link' to='/' onClick={() => {
                    setMenuOpen(false)
                }}>Home</NavLink>
                <NavLink className='nav-link' to='/about' onClick={() => {
                    setMenuOpen(false)
                }}>About</NavLink>
                <NavLink className='nav-link' to='/services' onClick={() => {
                    setMenuOpen(false)
                }}>Services</NavLink>
                <NavLink className='nav-link' to='/events' onClick={() => {
                    setMenuOpen(false)
                }}>Events</NavLink>
                <Button text='Sign In' />
            </nav>
        </div>
    )
}

export default HeaderNavigation;