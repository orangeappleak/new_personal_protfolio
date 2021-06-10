import React,{useEffect,useState} from 'react';
import '../stylesheets/seperateProjectSection.css';

import Joker from '../components/Joker';

var SeperateProjectSection = () => {

    return (
        <div id="seperate-project-section">

            <div id="main-project-section">

                <div onClick={closeProjectSection} id="close-section">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADjUlEQVR4nO3dv48UdRjH8fejHBQaKzrFhF6jVkptpYCS3EGCV2hEMfw/VicaTbiQ8MNEydEZ7ZQGScDa+AMLY3d4Cb/8WMxuMjs7ywG3M99n2M+ruv3eZO/Jvm9nd7MzGTAzMzMzMzMzMxuGmPULSXuAk8Aq8BLwTF9DPaH+BW4AZ4C1iLjTtlFrEEnPAxvAK52Nt9iuAYci4mbzF1NBRs+MKzhG134G3mg+U55q2fATHKMPrwEfb7uVpCuatCHphe7n65Zy+rE5Z9suaxN4tra0LyL+7PLB6oMklZ6hxWZEPFdfaAsyMXhEzHwnNiRJg0w9vm2vIVaQgyTjIMk4SDIOkoyDJOMgyThIMg6SjIMk4yDJOEgyDpKMgyTjIMk4SDIOkoyDJOMgyaQLImlF0j+S/pJ0pPQ8fUt1kIOkAP4G9o6W7gHvRcT5Ody3D3J4VBEh4L/a0i5gXdJyoZF6lyrIyCngfu32EnB2UXZf6YJExNfAcard1dgScE7Su2Wm6k+6IACj14xV2qO8U2aqfqQMAhAR54CPmHxN2Q2cl3S4zFTdSxsEICK+Ak4wHeWCpINlpupW6iAAEfEl1WH7zSgXJb1dZqrupA8CEBFfUJ1eV4+yh+qZ8maZqbqx4w+Go//ST4H98x3toW0BByPihwdtNJQPhvMI8gdQ+oSeLapz9r6ftcFQggxil7VI5hHkJPDrHO7ncY13WTOfHYPWPAmu9Dxjkk5Iut8Yb+thX9R3fjpgN5pzDmKXJelDYI3JeW8DKxHxXZmpupE+iKQPgM+YnPUOsBwRl8tM1Z3UQSS9D3zOdIyViNgoM1W30gaRdAw4zXSMoxFxqcxU3UsZRNJRYJ3qC6qxu8CxiPi2zFT92LX9Jv1S9Z3HWeDp2vI4xjdlpupPqu/UR3//N+DF2tJd4HhEXNzh/aZ5C183hE/qS7Wf7wGrO40xJBmDnAJuUn36X57HESdDkm6X1RXvsuyxOEgyDpKMgyTjIMk4SDIOkoyDJOMgyThIMg6SjIMk4yDJOEgyDpKMgyTjIMk4SDIOkkxbkFv1G3oCrq6T2GZzoS3IL43ba5L2dTPPwrvRXGg7cnEdeL12+y3g96QHbQzdmebCrMvm/QS82sdEC+wqcGDby+ZFxG3gENV19qwbV4HDbVf7fNClV3dTnbC/CrzM5JXb7NHdAq5T7aZOz7r0qpmZmZmZmZmZ2VD8D4h+Y9kNQ8mHAAAAAElFTkSuQmCC"/>
                </div>

                <div id="project-data">
                </div>
            </div>

        </div>
    )
}


function closeProjectSection(){
    setTimeout(() => {
        document.getElementById("seperate-project-section").classList.remove("open");
    }, 300);

    document.getElementById("main-project-section").removeAttribute('class');
}



export default SeperateProjectSection;