import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/bootstrap-4.0.0-dist/css/bootstrap.min.css'
// import Navbar from './components/Navbar'
import Intro from './components/Intro'
// import About from './components/About';
import Main from './components/Main';
import Aos from 'aos'

Aos.init()

function App() {

  return (
      <div className='App' style={{background: "rgba(46, 45, 43, 1)"}}>
        <Intro/>
        <Main/>
      </div>
  )
}

export default App
