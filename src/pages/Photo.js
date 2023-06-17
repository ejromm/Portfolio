import React from 'react'; 
import '../styles/Photo.css';
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'; 
import SignOne from '../assets/img20230430_16315165.jpg'; 
import Mirror from '../assets/Final_RommEthan_0423-001.jpg'; 
import SignTwo from '../assets/Final_RommEthan_0423-005.jpg'; 
import Josie from '../assets/Final_Romm_0322_002.jpg';
import Phone from '../assets/img20230430_16072906.jpg';
export default function Photo() {

    return (
        <div className='photo-container'>
            <div className='photo-grid-1'>
                <img id='jordan' src={Jordan} alt='jordan' />
                <img id='sign-one' src={SignOne} alt='sign-one' />
                <img id='mirror' src={Mirror} alt='mirror' />
            </div>
            <div className='photo-grid-2'>
                 <img id='sign-two' src={SignTwo} alt='sign-two' />
                 <img id='josie' src={Josie} alt='josie' />
                 <img id='phone' src={Phone} alt='phone' />
            </div>
        </div>
    )
}