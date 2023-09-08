import React from 'react'; 
import '../styles/Photo.css';
import { Link } from 'react-router-dom';
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'; 
import Parlor1 from '../assets/Parlor1.JPG';
import Smiley from '../assets/smiley.jpg'
export default function Photo() {

    return (
        <div className='photo-container'>
        <Link to={'/Senior-Portfolio-Page/photo/parlor-express'} id='parlor-card' page='photo'>
            <img src={Parlor1} alt='prlr-placeholder' id='prlr-placeholder'></img>
            <i>Parlor Express F/W 2022</i>
        </Link>
        <Link to={'/Senior-Portfolio-Page/photo/old-dominion'} id='olddominion-card' page='photo'>
            <img src={Jordan} alt='od-placeholder' id='od-placeholder'></img>
            <i>Old Dominion</i>
        </Link>
        <Link to={'/Senior-Portfolio-Page/photo/private-idaho'} id='idaho-card' page='photo'>
            <img src={Smiley} alt='idaho-placeholder' id='idaho-placeholder'></img>
            <i>Private Idaho</i>
        </Link>

        </div>
    )
}