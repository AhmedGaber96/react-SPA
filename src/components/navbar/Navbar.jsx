import React from 'react'
import { Link } from 'react-router-dom'
import navStayle from './nav.module.css'

export default function NavBar() {
  return (

        <nav className={`navbar navbar-expand-lg py-4 px-5    ${navStayle.navbg}`}>
  <div className="container-fluid  ">
    <div className='w-50'>
    <Link className="navbar-brand text-white ms-5" to={"home"}>START REACT</Link>
    </div>
   
    <button className="navbar-toggler px-4 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="text-white fs-6">MENU≡</span>
    </button>
    <div className="collapse navbar-collapse  px-5 justify-content-center" id="navbarNav">
      <ul className="navbar-nav   w-75 d-flex justify-align-content-center">
        <li className="nav-item">
          <Link className={`nav-link active text-white ${navStayle.navancor}`} aria-current="page" to={"portfolio"}>PORTFOLIO</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className={`nav-link active text-white ${navStayle.navancor}`} aria-current="page" to={'about'}>ABOUT</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className={`nav-link active text-white ${navStayle.navancor}`} aria-current="page" to={"contact"}>CONTACT</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
  )
}
