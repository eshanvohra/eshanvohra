import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import ProjSection from './components/ProjSection';
import Education from './components/Education';
import Certification from './components/Certification';
import Skills from './components/Skills';
import Positions from './components/Positions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <Intro />
      <ProjSection />
      <Education />
      <Skills/>
      <Certification />
      <Positions />
      <Contact />
      <Footer/>
      </>
  );
}

export default App;
