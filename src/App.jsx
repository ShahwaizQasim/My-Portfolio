import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import './App.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/home'
import Navbar from './components/navbar'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
