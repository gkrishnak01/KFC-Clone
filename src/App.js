import './App.css';
import TopBar from './components/topBar/TopBar';
import NavBar from './components/navBar.js/NavBar';
import LocationBar from './components/locationBar/LocationBar';
import  Banner from './components/banner/Banner';
import ThreeBlocks from './components/threeBlocks/ThreeBlocks';
import Menu from './components/menu/Menu';
import Stories from './components/stories/Stories';
import Footer from './components/footer/Footer';
import SideBox from './components/sidebox/SideBox';
import BackToTop from './components/backtotop/BackToTop';

function App() {
  return (
    <>
      <div className="App">
        <TopBar />
        <NavBar />
        <LocationBar />
        <Banner />
        <ThreeBlocks />
        <Menu />
        <Stories />
        <Footer />
        <ThreeBlocks />
        <SideBox />
        <BackToTop />
      </div>
      <div className='unsupported'>
        <span>Portrait Mode Is Not Supported Yet. Please Try Again Later.</span>
      </div>
    </>
  );
}

export default App;
