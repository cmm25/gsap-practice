import NavBar from './navBar/nav';
import Header from './header/head';
import About from './about-section/about';
import CustomCursor from './CustomCursor';
import Feature from './featured/featured';
import Gallery from './Gallery/gallery';
import Footer from './Footer/footer';
import './App.css';
function App() {
  return (
    <>
      <CustomCursor/>
      <div
      className="main-container"
      id="main-container"
      data-scroll-container>
      <NavBar />
      <Header />
      <Feature />
      <About />
      <Gallery />
      <Footer />
    </div>
    </>
  );
}

export default App;
