import React from "react";

import animehub from '../project images/AnimeHub.png';
import animehub2 from '../project images/Screenshot 2021-06-11 203320.png';
import './project-styles/Joker.css';


var AnimeHub = () => {
    return(
        <div id="project-name">
            <div id="project-name-img-wrapper">
                <img alt="" src={animehub} />
            </div>
            <div id="project-description">
                <div id="basic-desc">
                    <h1>Anime Hub</h1>
                    <p>This web application helps users to get information about any anime they like. It makes use of a public API from which the anime
                    information is extracted. The web app also makes it easier for people to find new anime shows to watch to according to their liking.
                    </p>

                    <p>The web application features a top ten anime list which is based on the ratings of the anime shows, it also features a search bar that lets you
                    search your favourite anime.
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
                                    <h2>Full-Stack Developer</h2>
                                    <h2>React Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="project-img2">
                    <img alt="" src={animehub2} />
                </div>

            </div>
        </div>
    )
}

export default AnimeHub;
