import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function NavBar() {

    return (
        <>
        <nav>
          <Link to={'/Senior-Portfolio-Page/film/interview'} page='film'>Film</Link>
          <Link to={'/Senior-Portfolio-Page/photo'} page='photo'>Photo</Link>
          <Link to={'/Senior-Portfolio-Page/about'} page='about'>About</Link>

        </nav>
        </>

    )

}