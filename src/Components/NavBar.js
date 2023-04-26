import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function NavBar() {

    return (
        <>
        <nav>
          <Link to={'/film/untitled'} page='film'>Film</Link>
          <Link to={'/photo'} page='photo'>Photo</Link>
          <Link to={'/about'} page='about'>About</Link>

        </nav>
        </>

    )

}