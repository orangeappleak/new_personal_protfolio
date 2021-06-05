import {useEffect} from 'react';
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import '../stylesheets/App.css';

import IntroPage from '../components/IntroPage.js';
import Navbar from '../components/Navbar.js';

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
      <Parallax style={{position: 'relative',marginTop: '5em'}} id="parallax-pages" pages={1}>
        <IntroPage />
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
      document.querySelector("#main-page").removeChild(document.querySelector("#load"));
    }, 3000);
  });
}

export default App;
