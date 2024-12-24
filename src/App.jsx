import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import './App.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/home'
import Navbar from './components/navbar'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
