import React from 'react';
import '../stylesheets/Navbar.css';

function Navbar(){
    return(
        <div id="Navbar">
            <h1>AK</h1>
            <div id="sub-navbar">
                <div id="links">
                    <h1>Home</h1>
                    <h1>About Me</h1>
                    <h1>Projects</h1>
                    <h1>Skills</h1>
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar