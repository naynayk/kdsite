import './Navbar.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../../../static/KD_logotype_web.svg'  

function Navbar() {
  const [ul, setUl] = useState(false)
  return (
    <nav>
      <div><NavLink to='/'><img className='image1' src={logo1}/></NavLink></div>
      <ul className='ul'>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/anwälte'>Anwälte</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/kanzlei'>Kanzlei</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/privatperson'>Privatperson</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/unternehmen'>Unternehmen </NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/beratungstermin'>Beratungstermin </NavLink></li>
        <p className='navbarP'>Russisch / <span className='navbarSpan'>Deutsch</span></p>
      </ul>
      <img onClick={() => setUl(true)} style={{display: ul ? 'none' : ''}} className='menu' src="https://cdn4.iconfinder.com/data/icons/interface-essential-1/24/button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png" alt="" />
      <ul style={{display: ul ? '' : 'none'}} className='ul2'>
        <span className='navSpan2'>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/anwälte'>Anwälte</NavLink></li>
          <img className='close' onClick={() => setUl(false)} src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="" />
        </span>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/kanzlei'>Kanzlei</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/privatperson'>Privatperson</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/unternehmen'>Unternehmen </NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/beratungstermin'>Beratungstermin </NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar