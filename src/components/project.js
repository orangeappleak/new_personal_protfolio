import React from 'react';
import joker from './project images/TheJoker.png';
import bikerGang from './project images/TheBikerGang.png';
import speeve from './project images/speever.png';
import animehub from './project images/AnimeHub.png';
import ems from './project images/ems.png';
import '../stylesheets/projectSection.css';


export default function ProjectSection(){
    return(
        <div id="project-section" class="intersect">
            <div id="project-section-heading" class="intersect">
                <div id="heading-wrapper"></div>
                <h1>Projects : </h1>
            </div>
            <div id="my-projects">
                <ProjectList />
            </div>
        </div>
    )
}

function ProjectList(){
    var projectNames = ["Joker.","Biker Gang.","Speeve.","Anime Hub.","Employee Management."];
    var images = [joker,bikerGang,speeve,animehub,ems];

    return(
        <div id="project-list">
            {projectNames.map((project,key) => (
                <div id="project">
                    <div id="project-image-wrapper">
                        <img src={images[key]} />
                    </div>
                    <h2 id="project-heading" class="intersect" onMouseEnter = {showImage} onMouseLeave = {hideImage}><span style={{
                        opacity: '0.5',
                        marginRight: '40px',
                        fontSize: '60px'
                    }}>{key + 1}</span>{project}</h2>
                </div>
            ))}
        </div>
        
    )
}

function showImage(ele){
    ele.target.parentElement.children[0].classList.add("show-image");
}
function hideImage(ele){
    ele.target.parentElement.children[0].classList.remove("show-image");
}