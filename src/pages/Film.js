import React from 'react'; 
import '../styles/Film.css'; 
import { useState, useEffect } from 'react';

export default function Film() {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/by-Guu9kxKA"); 
    const [isBold, setisBold] = useState(2);
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
            <span className={isBold === 0 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/dHCBcsy0kho?si=ZQusLsKm-AKALS_g",0)}>MCKL - FOCUS! (2023) - Editor</span>
            <span className={isBold === 1 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/vaco2riSZQs?si=5ls7v2g7g2EwCGHt",1)}>Wally x iKahan Wall Crawl Sizzle (2023) - Editor</span>
            <span className={isBold === 2 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/by-Guu9kxKA",2)}>Interview (2023)</span>
            <span className={isBold === 3 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://player.vimeo.com/video/821107541?h=0a10cae31a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 3)}> Untitled (2022)</span>
            <span  className={isBold === 4 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/M6FV60QN_BM", 4)}>Nancy Raygun for Amnesty International (2021)</span>
            <span className={isBold === 5 ? 'film-list-item bold' : 'film-list-item'}   onClick={() => changeVideo("https://www.youtube.com/embed/nfZ_9TyFk1k?si=mG5EB69iKYgY6IrQ", 5)}>A Visual Epitaph for a Bee in the Window (2020)</span>
            </div>
            <div className='film-grid'>
            <iframe src={currentVideo} id='full-frame' frameborder="0" allow="autoplay; fullscreen; picture-in-picture"   title="current-video"></iframe> 
            </div>

        </div>
    )
}

