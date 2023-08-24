import React, { useEffect, useState } from 'react'; 
import '../styles/Header.css'; 
import { Link } from 'react-router-dom'; 

export default function Header() {
    const [navExtended, setNavExtended] = useState(false); 
    

    return (
        <>
         <div className='header'>
          <Link className='header-name'  to={'/Senior-Portfolio-Page/'}page='home'>Ethan Romm</Link>
          <button className={navExtended ? 'open-navbar-btn active' :'open-navbar-btn'} onClick={() => setNavExtended(!navExtended)}>
             <span className='line-1'></span>
             <span className='line-2'></span>
             <span className='line-3'></span>
          </button>
          <nav  onClick={() => setNavExtended(false)} className={navExtended ? 'nav-open' : ''}>
          <Link to={'/Senior-Portfolio-Page/film'} onClick={() => setNavExtended(!navExtended)} page='film'>film</Link>
          <Link to={'/Senior-Portfolio-Page/photo'} onClick={() => setNavExtended(!navExtended)} page='photo'>photo</Link>
          <Link to={'/Senior-Portfolio-Page/about'} onClick={() => setNavExtended(!navExtended)} page='about'>about</Link>
        </nav>
         </div>
         
        </>
    )

}