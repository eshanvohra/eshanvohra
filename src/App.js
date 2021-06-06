import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import ProjSection from './components/ProjSection';
import Education from './components/Education';

function App() {
  return (
    <>
    <Header />
      <Intro />
      <ProjSection />
      <Education/>
      </>
  );
}

export default App;
