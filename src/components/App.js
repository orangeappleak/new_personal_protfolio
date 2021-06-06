import {useEffect} from 'react';
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import '../stylesheets/App.css';

import Navbar from '../components/Navbar.js';
import IntroPage from '../components/IntroPage.js';
import About from '../components/About';

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
      <Parallax style={{position: 'relative',marginTop: '1em'}} id="parallax-pages" pages={1.3}>
        <IntroPage />
        <About />
      </Parallax>
    </div>
  );
}

function load_end(){
  document.querySelector("#A").addEventListener('animationend',() => {
    setTimeout(() => {
      document.querySelector("#load").classList.add("remove_load");
      var animate = document.getElementsByClassName('animate');
      [...animate].forEach(ele => {
        ele.classList.add("now");
      });
    }, 800);
    setTimeout(() => {
      document.querySelector("#main-page").removeChild(document.querySelector("#load"));
    }, 3000);
  });
}

export default App;
