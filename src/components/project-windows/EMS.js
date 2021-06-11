import React from "react";

import ems from '../project images/ems.png';
import ems2 from '../project images/Screenshot 2021-06-11 202923.png';
import './project-styles/Joker.css';


var EMS = () => {
    return(
        <div id="project-name">
            <div id="project-name-img-wrapper">
                <img alt="" src={ems} />
            </div>
            <div id="project-description">
                <div  id="basic-desc">
                    <h1>Employee Management Site</h1>
                    <p>This Website was designed and developed as a part of a hackathon on HackerEarth.com, the challenge was to create a web app 
                    that lets project managers and higher authorities manage their employees in a better way.It lets employees make requests for leaves and holidays and also lets
                    lets the manager know whether a certain employee has showed up for work or not.The web app also lets the project head to manage the project teams that he has.
                    </p>

                    <p>
                    The Web app was developed in a span of 1 week and it makes use of react for the front-end and firbase for the backend.
                    </p>
                    <div id="tools-used">
                        <div id="tools-used-left">
                            <h1>Tools used</h1>
                                <div id="tool-names">
                                    <h2>React JS</h2>
                                    <h2>React Router</h2>
                                    <h2>React Spring</h2>
                                    <h2>Firestore</h2>
                                    <h2>Firebase</h2>
                                </div>
                        </div>
                        <div id="tools-used-right">
                            <h1>Roles</h1>
                            <div id="roles">
                                    <h2>UI/UX Designer</h2>
                                    <h2>Front-End Developer</h2>
                                    <h2>Full Stack Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="project-img2">
                    <img alt="" src={ems2} />
                </div>

            </div>
        </div>
    )
}

export default EMS;