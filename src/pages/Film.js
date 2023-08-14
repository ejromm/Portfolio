import React from 'react'; 
import '../styles/Film.css'; 

import { Link } from 'react-router-dom';
export default function Film() {

    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <Link to={'/Senior-Portfolio-Page/film/interview'} page='film'>Interview (2023)</Link>
            <Link to={'/Senior-Portfolio-Page/film/untitled'} page='film'><b>Untitled (2022)</b></Link>
            <Link to={'/Senior-Portfolio-Page/film/nancyraygun'} page='film'>Nancy Raygun for Amnesty International (2021)</Link>
            </div>
            <div className='film-grid'>
            <iframe src="https://player.vimeo.com/video/821107541?h=0a10cae31a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  title="ethan-ss.mp4"></iframe>
            </div>
        </div>
    )
}