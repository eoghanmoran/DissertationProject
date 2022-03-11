import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/aboutUS.mp4' autoPlay loop muted /> */}
            <Fade left>
                <h1>Forward South Partnership</h1>
                <p>Making a difference to South Belfast through partnerships & projects.</p>
            </Fade>
        </div>
    );
}

export default HeroSection;