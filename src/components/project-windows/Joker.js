import React from "react";

import joker from '../project images/TheJoker 2.svg';
import jokerMobile from '../project images/joker2.svg';
import './project-styles/Joker.css';


var Joker = () => {
    return(
        <div id="project-name">
            <div id="project-name-img-wrapper">
                <img alt="" src={joker} />
            </div>
            <div id="project-description">
                <div id="basic-desc">
                    <h1>The Joker</h1>
                    <p>A Website that was first designed in figma and 
                    then built using basic html css and some JS.
                    It is a concept website for the movie Joker and hence has all related information about the movie 
                    like the movie trailers and clips.
                    </p>

                    <p>This was one of my first designs where I used figma first to design the page and then moved on to hard coding the actual site.
                    </p>
                    <div id="tools-used">
                        <div id="tools-used-left">
                            <h1>Tools used</h1>
                                <div id="tool-names">
                                    <h2>Figma</h2>
                                    <h2>HTML</h2>
                                    <h2>Java Script</h2>
                                    <h2>CSS</h2>
                                    <h2>JQuery</h2>
                                    <h2>PhotoShop</h2>
                                </div>
                        </div>
                        <div id="tools-used-right">
                            <h1>Roles</h1>
                            <div id="roles">
                                    <h2>UI/UX Designer</h2>
                                    <h2>Front-End Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="project-img2">
                    <img alt="" src={jokerMobile} />
                </div>

            </div>
        </div>
    )
}

export default Joker;