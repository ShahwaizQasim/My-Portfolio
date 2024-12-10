import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Project from './pages/project'
import Navbar from './components/navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
