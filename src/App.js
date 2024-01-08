import NavBar from './navBar/nav';
import Header from './header/head';
import About from './about-section/about';
import CustomCursor from './CustomCursor';
import Feature from './featured/featured';
import Gallery from './Gallery/gallery';
import './App.css';
function App() {
  return (
    <>
      <CustomCursor/>
      <div className="main-container" id='main-container'>
      <NavBar/>
      <Header />
      <Feature/>
      <About/>
      <Gallery/>
      </div>
    </>
  );
}

export default App;
