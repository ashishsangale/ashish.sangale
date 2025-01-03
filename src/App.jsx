import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/bootstrap-4.0.0-dist/css/bootstrap.min.css'
// import Navbar from './components/Navbar'
import Intro from './components/Intro'
// import About from './components/About';
import Main from './components/Main';
import Particle from './components/Particles';

// Aos.init()

function App() {

  return (
      <div className='App'>
        <Intro/>
        <Main/>
        <Particle/>
      </div>
  )
}

export default App
