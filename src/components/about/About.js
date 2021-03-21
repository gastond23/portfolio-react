import React from 'react';
import "./About.css";
import aboutImg from "../../media/about-img.jpg"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, provident? Reprehenderit quo tempore est perferendis inventore dicta consequatur commodi minima! At quidem nemo fuga! Mollitia suscipit doloremque architecto sed earum.</p>
            </div>
            <div className="about-img">
                <img src={aboutImg} alt="About me" className="about-img"/>
            </div>
        </div>
    )
}

export default About
