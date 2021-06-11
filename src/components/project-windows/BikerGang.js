import React from 'react';
import './project-styles/Joker.css';

import biker2 from '../project images/biker2.svg';
import biker from '../project images/TheBikerGang.png';

var BikerGang = () => {
    return(
        <div id="project-name">
             <div id="project-name-img-wrapper">
                <img alt="" src={biker} />
            </div>
            <div id="project-description">
                <div id="basic-desc">
                    <h1>The Biker Gang</h1>
                    <p>A personal project, a concept site that lets you buy bikes online.It makes use of firebase to allow people 
                    to login using google and other methods.The user data and bike data is stored in the form of collections and is retrieved 
                    from the same.
                    </p>
                    <div id="tools-used">
                        <div id="tools-used-left">
                            <h1>Tools used</h1>
                                <div id="tool-names">
                                    <h2>Figma</h2>
                                    <h2>HTML</h2>
                                    <h2>Java Script</h2>
                                    <h2>CSS</h2>
                                    <h2>SASS</h2>
                                    <h2>Firebase</h2>
                                    <h2>PhotoShop</h2>
                                </div>
                        </div>
                        <div id="tools-used-right">
                            <h1>Roles</h1>
                            <div id="roles">
                                    <h2>UI/UX Designer</h2>
                                    <h2>Front-End Developer</h2>
                                    <h2>Full-Stack Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="project-img2">
                    <img alt="" src={biker2} />
                </div>

            </div>
        </div>
    )
}

export default BikerGang;