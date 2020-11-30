import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <p>It was made in 2020</p>
            <span>-Team BALNKCHECK-</span>
        </div>
    );
}

export default About;