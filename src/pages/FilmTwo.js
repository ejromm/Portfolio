import React from 'react'; 
import '../styles/Film.css'; 
import { Link } from 'react-router-dom';
export default function FilmTwo() {

    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <Link to={'/film/untitled'} page='film/untitled'>Untitled (2023)</Link>
            <Link to={'/film/screening'} page='film/untitled'><b>Screening (2023)</b></Link>
            </div>
            <div className='film-grid'>
                <video  controls >
                    
                </video>
            </div>
        </div>
    )
}