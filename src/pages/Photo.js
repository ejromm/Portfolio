import React from 'react'; 
import '../styles/Photo.css';
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'
export default function Photo() {

    return (
        <div className='photo-container'>
            <div className='photo-grid'>
                <img id='jordan-portrait' src={Jordan} />
            </div>
        </div>
    )
}