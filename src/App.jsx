import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
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
      </BrowserRouter>
    </>
  )
}

export default App
