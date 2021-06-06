import React from 'react';
import {ParallaxLayer} from '@react-spring/parallax';

import '../stylesheets/Projects.css';

var Projects = () =>(
    <ParallaxLayer style={{position: 'relative',height: '100vh'}} offset={0} speed={1.2} id="project-section">
        <h1 style={{color: 'white',fontSize: '90px'}}>This is projects section</h1>
    </ParallaxLayer>
)

export default Projects;