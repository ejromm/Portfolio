import React, { useEffect, useState } from 'react'; 
import '../styles/Photo.css'; 
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'; 
import SignOne from '../assets/img20230430_16315165.jpg'; 
import Mirror from '../assets/Final_RommEthan_0423-001.jpg'; 
import SignTwo from '../assets/Final_RommEthan_0423-005.jpg'; 
import Phone from '../assets/img20230430_16072906.jpg';
export default function PhotoTwo() {
    const slides = [
        Jordan,
        SignOne,
        Mirror,
        SignTwo,
        Phone,
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStlyes = {
        height: '100%',
        objectFit: 'contain',
        width: 'auto',
        justifySelf: 'center',
        alignSelf: 'center'
    }
    const leftArrowStyles = {
        position: 'absolute', 
        top: '50%', 
        transform: 'translate(0, -50%)', 
        left: '32px', 
        fontSize: '45px', 
        color: '#fff', 
        zIndex: '1', 
        cursor: 'pointer',
    }
    const rightArrowStyles = {
        position: 'absolute', 
        top: '50%', 
        transform: 'translate(0, -50%)', 
        right: '32px', 
        fontSize: '45px', 
        color: '#fff', 
        zIndex: '1', 
        cursor: 'pointer',
    }
    const dotsContainerStyles = {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
       
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
        color: 'white'
    }
   
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <>
        <div className='photo-2-container'>
           
            <img src={slides[currentIndex]} style={slideStlyes} alt='carousel-img' />
            
        </div>
        <div  style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => {
           return <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>●</div>
        })}
        </div>
        </>
    )
}
