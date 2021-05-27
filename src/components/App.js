import {useEffect} from 'react';
import '../stylesheets/App.css';
import './fonts/ostrich-sans.sans-black.ttf';
import Navbar from '../components/Navbar';
import IntroPage from '../components/IntroPage';
import AboutPage from '../components/About_me';
import ProjectSection from '../components/project';
import checkIntersection from '../components/intersectionObserver';

function App() {

  useEffect(() => {
    checkIntersection()
  });

  return (
    <div id="main-page">
      <Navbar />
      <IntroPage />
      <AboutPage />
      <ProjectSection />
    </div>
  );
}

export default App;
