import { useState,useRef,useEffect } from 'react';
import NavBar from './components/navBar/nav'

import Header from './components/header/head';
import About from './components/about-section/about';
import CustomCursor from './components/CustomCursor';
import Feature from './components/featured/featured';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';
import useLocoScroll from './hooks/useLocalScroll';
import './App.css';
function App() {
    const ref = useRef(null);
    const [preloader, setPreload] = useState(true);
  
  
    useLocoScroll(!preloader);
  
    useEffect(() => {
      if (!preloader && ref) {
        if (typeof window === "undefined" || !window.document) {
          return;
        }
      }
    }, [preloader]);
  
    const [timer, setTimer] = useState(3);
  
    const id = useRef(null);
  
    const clear = () => {
      window.clearInterval(id.current);
      setPreload(false);
    };
  
    useEffect(() => {
      id.current = window.setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
      return () => clear();
    }, []);
  
   useEffect(() => {
      if (timer === 0) {
        clear();
      }
    }, [timer]);
  
    if (typeof window === "undefined" || !window.document) {
      return null;
    }
  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Nairobi</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          
        >
          <NavBar />
          <Header />
          <Feature />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
