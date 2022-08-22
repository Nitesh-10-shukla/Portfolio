import React,{useEffect} from 'react';
import NavBar from './shared/navbar.js/Navbar';
import './styles/style.css'
import Home from './containers/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './containers/blogs/Blog';
import AllPortfolio from './containers/portfolio/AllPortfolio';
import ScrollToTop from './ScrollToTop';
import Footer from './shared/footer/Footer'
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div className='overflow-hidden'>
     <NavBar/>
     <ScrollToTop/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/blog' element={<Blog/>}></Route>
      <Route  path='/portfolio' element={<AllPortfolio/>}></Route>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
