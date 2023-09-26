import React, {useRef} from 'react'


// react icons paket kodlari
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

import { Link } from 'react-router-dom';

// komponentler
import Button from './Button'

import headerdeKiLogo from '../assets/images/logo.svg'


const Navbar = () => {
  
  const overlayDivi = useRef()
  
  const overlayiAc = () => {
    overlayDivi.current.classList.add('active')
  }

  const overlayiBagla = () => {
    overlayDivi.current.classList.remove('active')
  }

  return (
<>
    <div className="overlay" ref={overlayDivi}>
        <button onClick={overlayiBagla} className="close-icon"><AiOutlineClose /></button>
        <div className="overlay-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Blogs</a>
          <a href="">Contact</a>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={headerdeKiLogo} alt="" /></a>
    <button onClick={overlayiAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/haqqimizda">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
      
    <Button buttonunMetni="Sign In" />

    </div>
  </div>
</nav>
</>
  )
}

export default Navbar