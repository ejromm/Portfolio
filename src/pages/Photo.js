import React from 'react'; 
import '../styles/Photo.css';
import { Link } from 'react-router-dom';
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'; 
import SignOne from '../assets/img20230430_16315165.jpg'; 
import Mirror from '../assets/Final_RommEthan_0423-001.jpg'; 
import SignTwo from '../assets/Final_RommEthan_0423-005.jpg'; 
import Josie from '../assets/Final_Romm_0322_002.jpg';
import Phone from '../assets/img20230430_16072906.jpg';
import Smiley from '../assets/smiley.jpg'
export default function Photo() {

    return (
        <div className='photo-container'>
        <Link to={'/Senior-Portfolio-Page/photo/parlor-express'} id='parlor-card' page='photo'><b>Parlor Express F/W 2022</b></Link>
        <Link to={'/Senior-Portfolio-Page/photo/white-crosses'} id='whitecross-card' page='photo'>
            <img src={Jordan} alt='white-cross-placeholder' id='cross-placeholder'></img>
            <b>Old Dominion</b>
        </Link>
        <Link to={'/Senior-Portfolio-Page/photo/private-idaho'} id='idaho-card' page='photo'>
            <img src={Smiley} alt='idaho-placeholder' id='idaho-placeholder'></img>
            <b>Private Idaho</b>
        </Link>

        </div>
    )
}