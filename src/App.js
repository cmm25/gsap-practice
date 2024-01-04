import NavBar from './navBar/nav';
import Header from './header/head';
import CustomCursor from './CustomCursor';
import './App.css';
function App() {
  return (
    <>
      <CustomCursor/>
      <div className="main-container" id='main-container'>
      <NavBar/>
      <Header />
      </div>
    </>
  );
}

export default App;
