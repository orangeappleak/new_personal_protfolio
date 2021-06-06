import React from 'react';
import {ParallaxLayer} from '@react-spring/parallax';

import '../stylesheets/About.css';

var About = () => (
    <ParallaxLayer offset={0.99} speed={1.2} id="about-section">
        <div id="back-strip">
            <h1 style={{fontWeight: '700'}}>About Me</h1>
            <ParallaxLayer style={{
                left: '40%',
                width: '50%',
                height: 'auto'
            }} speed={0.5} offset={0} id="skills">
                <h1>Web Developer</h1>
                <h1>UI/UX Designer</h1>
                <h1>FullStack Developer</h1>
                <p>I am a creative and quick-thinking individual focused on overcoming challenges and working with fellow professionals. I am great at attaining new skills and instantly applying them toward real problems. I am passionate for practical solutions at all points of production.</p>
            </ParallaxLayer>
        </div>
    </ParallaxLayer>
)

export default About;