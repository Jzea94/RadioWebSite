import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Player from './components/Player/Player.jsx'
import FooterComponent from './components/Footer/Footer.jsx'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter basename='/RadioWebSite'>
        <header className='header'>
          <NavBar />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <div className='content-player'>
          <Player />
        </div>

        <footer className='social-info'>
          <FooterComponent />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
