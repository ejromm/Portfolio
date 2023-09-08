import React, { useState } from 'react'; 
import '../styles/Photo.css'; 
import Parlor1 from '../assets/Parlor1.JPG';
import Parlor2 from '../assets/Parlor2.JPG'; 
import Parlor3 from '../assets/Parlor3.JPG'; 
import Parlor4 from '../assets/Parlor4.JPG'; 
export default function PhotoTwo() {
    const slides = [
        Parlor1, 
        Parlor2, 
        Parlor3, 
        Parlor4
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStlyes = {
        height: '100%',
        objectFit: 'contain',
        maxWidth: '90%',
        justifySelf: 'center',
        alignSelf: 'center'
    }
    
    const dotsContainerStyles = {
        height: '5vh',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
       
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
        color: 'black'
    }
   
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <>
        <div className='photo-2-container'>
           
            <img  src={slides[currentIndex]} style={slideStlyes} alt='carousel-img' />
            
        </div>
        <div  style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => {
           return <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>●</div>
        })}
        </div>
        </>
    )
}
