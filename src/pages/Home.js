import React from 'react'; 
import '../styles/Home.css'; 
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Home() {

    return(
        <>
        <div className='home'>
        <NavBar />
        </div>
        
        </>
    )
}