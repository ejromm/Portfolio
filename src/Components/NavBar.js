import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 
export default function NavBar() {

    return (
        <>
        <nav>
          <Link to={'/Senior-Portfolio-Page/film'} page='film'>film</Link>
          <Link to={'/Senior-Portfolio-Page/photo'} page='photo'>photo</Link>
          <Link to={'/Senior-Portfolio-Page/about'} page='about'>about</Link>

        </nav>
        </>

    )

}