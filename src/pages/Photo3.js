import '../styles/Photo.css'; 
import React, { useState } from 'react'; 
import Smiley from '../assets/smiley.jpg'; 
import Gate from '../assets/000038060006.jpg'
import House from '../assets/000038060005.jpg'; 
import Hill from '../assets/000038060009.jpg'; 
export default function PhotoThree() {
    const slides = [
        Smiley,
        Hill, 
        Gate, 
        House, 

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
        <div className='photo-3-container'>
           
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
