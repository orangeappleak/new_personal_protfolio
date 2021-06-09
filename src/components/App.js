import {useEffect} from 'react';
import {Parallax} from '@react-spring/parallax';
import '../stylesheets/App.css';
import '../stylesheets/mobile.css';

import Navbar from '../components/Navbar.js';
import IntroPage from '../components/IntroPage.js';
import About from '../components/About';
import Projects from '../components/Projects';

function App() {

  useEffect(() => {
    load_end();
  }, []);

  return (
    <div id="main-page">
      <div id="load">
        <h1 id="A">A</h1>
        <div id="seperation"></div>
        <h1 id="K">K</h1>
      </div>
      <Navbar />
      <Parallax style={{position: 'relative'}} id="parallax-pages" pages={4}>
        <IntroPage />
        <About />
        <Projects />
      </Parallax>
    </div>
  );
}

function load_end(){
  document.querySelector("#A").addEventListener('animationend',() => {
    setTimeout(() => {
      document.querySelector("#load").classList.add("remove_load");
    }, 800);
    setTimeout(() => {
      var animate = document.getElementsByClassName('animate');
      [...animate].forEach(ele => {
      ele.classList.add("now");
    });
    }, 1000);
    
    setTimeout(() => {
      document.querySelector("#main-page").removeChild(document.querySelector("#load"));
    }, 3000);
  });
}

export default App;
