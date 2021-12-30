import React from 'react';

import './project-styles/Joker.css';

import speeve from '../project images/speever.png';
import speeve2 from '../project images/speeve2.svg';


var Speeve = () => {
    return(
        <div id="project-name">
             <div id="project-name-img-wrapper">
                <img alt="" src={speeve} />
            </div>
            <div id="project-description">
                <div id="basic-desc">
                    <h1>Speeve</h1>
                    <p>
                        A web-app as well as a mobile app designed and developed for a start-up company called Speeve.Made use of ReactJs and React-native
                        to develop the web-app and mobile app respectively.The Web-App is a SPA(Single Page Application) that gives a brief info on what Speeve is and
                        what Speeve does.It also allows Users to create an account via the web app.
                    </p>

                    <p>The mobile app is still in development and use React Native as the main code base.</p>
                    <div id="tools-used">
                        <div id="tools-used-left">
                            <h1>Tools used</h1>
                                <div id="tool-names">
                                    <h2>Figma</h2>
                                    <h2>PhotoShop</h2>
                                    <h2>ReactJS</h2>
                                    <h2>React Native</h2>
                                    <h2>Goole Fonts</h2>
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
                    <img alt="" src={speeve2} />
                </div>

            </div>
        </div>
    )
}

export default Speeve;
