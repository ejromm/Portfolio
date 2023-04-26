
import './styles/App.css';

import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Film from './pages/Film';
import FilmTwo from './pages/FilmTwo';
import About from './pages/About'; 
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header />
     <Routes>
     <Route  path='/' element={<Home />}/>
     <Route  path='/photo' element={<Photo />} />
     <Route  path='/film/untitled' element={<Film />}/>
     <Route  path='/film/screening' element={<FilmTwo />}/>
     <Route  path='/about' element={<About />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
     
     </>
  );
}

