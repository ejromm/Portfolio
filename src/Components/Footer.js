import React from 'react'; 
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom'; 


export default function Footer() {


        return (
            <>
                <div className='footer'>
                <div className='footer-header'>
                    
                    <img></img>       
                </div> 
                   
                <div className='footer-end'>
                    ejromm@gmail.com (571)-429-1610
                </div>
                <Link to={'/Senior-Portfolio-Page'} page='home'>GO HOME</Link>
                </div>
            </>
        )


}