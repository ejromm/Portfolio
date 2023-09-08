
import './styles/App.css';

import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Photo from './pages/Photo';
import PhotoTwo from './pages/Photo2';
import PhotoThree from './pages/Photo3';
import PhotoFour from './pages/Photo4'; 
import Film from './pages/Film';

import About from './pages/About'; 
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header />
     <Routes>
     <Route  path='/Senior-Portfolio-Page' element={<Home />}/>
     <Route  path='/Senior-Portfolio-Page/photo' element={<Photo />} />
     <Route  path='/Senior-Portfolio-Page/photo/old-dominion' element={<PhotoTwo />} />
     <Route  path='/Senior-Portfolio-Page/photo/private-idaho' element={<PhotoThree />} />
     <Route  path='/Senior-Portfolio-Page/photo/parlor-express' element={<PhotoFour />} />
     <Route  path='/Senior-Portfolio-Page/film' element={<Film />}/>
     <Route  path='/Senior-Portfolio-Page/about' element={<About />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
     
     </>
  );
}

