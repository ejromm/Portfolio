import React from 'react'; 
import '../styles/Film.css'; 
import { useState, useEffect } from 'react';

export default function Film() {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/by-Guu9kxKA"); 
    const [isBold, setisBold] = useState(1);
    function changeVideo(newVideo, number) {
        if(newVideo !== currentVideo) {
            setCurrentVideo(newVideo); 
            setisBold(number);
        
        }
       
       
    }
    useEffect(() => {
        console.log(currentVideo);
    }, [currentVideo])
    return (
        <div className='film-container'>
            <div className='film-list-container'>
            <span className={isBold === 0 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/jaRcA-z67b4",0)}>Wally x UpDating Client Sizzle (2023)</span>
            <span className={isBold === 1 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/by-Guu9kxKA&",1)}>Interview (2023)</span>
            <span className={isBold === 2 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://player.vimeo.com/video/821107541?h=0a10cae31a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 2)}> Untitled (2022)</span>
            <span  className={isBold === 3 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/M6FV60QN_BM", 3)}>Nancy Raygun for Amnesty International (2021)</span>
            <span className={isBold === 4 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/nfZ_9TyFk1k?si=mG5EB69iKYgY6IrQ", 4)}>A Visual Epitaph for a Bee in the Window (2020)</span>
            </div>
            <div className='film-grid'>
            {isBold === 0 ? <iframe id='mobile-frame' src="https://www.youtube.com/embed/jaRcA-z67b4" title="Wally x UpDating Client Sizzle (Mobile)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : <iframe src={currentVideo} id='full-frame' frameborder="0" allow="autoplay; fullscreen; picture-in-picture"   title="current-video"></iframe> }
            </div>

        </div>
    )
}
