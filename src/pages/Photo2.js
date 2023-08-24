import React, { useState } from 'react'; 
import '../styles/Photo.css'; 
import Jordan from '../assets/Jordan-Portrait-1 copy.jpg'; 
import Jordan2 from '../assets/jordi 3.jpg';
import Jordan3 from '../assets/jordi 11.jpg'; 
import SignOne from '../assets/img20230430_16315165.jpg'; 
import Mirror from '../assets/Final_RommEthan_0423-001.jpg'; 
import SignTwo from '../assets/Final_RommEthan_0423-005.jpg'; 
import Phone from '../assets/img20230430_16072906.jpg';
export default function PhotoTwo() {
    const slides = [
        Jordan,
        SignTwo,
        Jordan2,
        Mirror,
        SignOne,
        Jordan3,
        Phone,
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
