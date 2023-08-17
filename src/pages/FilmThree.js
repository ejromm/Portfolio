import React from 'react'; 
import '../styles/Film.css'; 
import { Link } from 'react-router-dom';
export default function FilmThree() {

    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <Link to={'/Senior-Portfolio-Page/film/interview'} page='film'>Interview (2023)</Link>
            <Link to={'/Senior-Portfolio-Page/film/untitled'} page='film'>Untitled (2022)</Link>
            <Link to={'/Senior-Portfolio-Page/film/nancyraygun'} page='film'><b>Nancy Raygun for Amnesty International (2021)</b></Link>
            
            </div>
            <div className='film-grid'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M6FV60QN_BM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}


 