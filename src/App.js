import { useState,useRef,useEffect } from 'react';
import NavBar from './navBar/nav';
import Header from './header/head';
import About from './about-section/about';
import CustomCursor from './CustomCursor';
import Feature from './featured/featured';
import Gallery from './Gallery/gallery';
import Footer from './Footer/footer';
import useLocoScroll from './hooks/useLocalScroll';
import './App.css';
function App() {
  const[preloader, setPreloader]=useState(true)
  useLocoScroll(!preloader)
  const[timer, setTimer]=useState(3)
  const id=useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
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
