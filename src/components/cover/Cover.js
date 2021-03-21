import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/cover-video.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Gaston Dandre</h1>
            <p>Full Stack Developer</p>
        </div>
    )
}

export default Cover
