import React from 'react'; 
import '../styles/Film.css'; 

import { Link } from 'react-router-dom';
export default function Film() {

    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <Link to={'/film/untitled'} page='film/untitled'><b>Untitled (2023)</b></Link>
            <Link to={'/film/screening'} page='film/untitled'>Screening (2023)</Link>
            </div>
            <div className='film-grid'>
                <video  controls autoPlay muted>
                    
                </video>
            </div>
        </div>
    )
}