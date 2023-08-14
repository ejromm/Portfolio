import React from 'react'; 
import '../styles/Film.css'; 
import { Link } from 'react-router-dom';
export default function FilmTwo() {

    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <Link to={'/Senior-Portfolio-Page/film/interview'} page='film'><b>Interview (2023)</b></Link>
            <Link to={'/Senior-Portfolio-Page/film/untitled'} page='film'>Untitled (2022)</Link>
            <Link to={'/Senior-Portfolio-Page/film/nancyraygun'} page='film'>Nancy Raygun for Amnesty International (2021)</Link>
            </div>
            <div className='film-grid'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/by-Guu9kxKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}
