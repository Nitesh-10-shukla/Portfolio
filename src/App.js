import React,{useEffect,useState} from 'react';
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
import Loader from './shared/loader/Loader';
import NotFound from './attachments/error/NotFound';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <div className='overflow-hidden'>
      {
      (!loading)?
      <>     <NavBar/>
     <ScrollToTop/>
     
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/blog' element={<Blog/>}></Route>
      <Route  path='/portfolio' element={<AllPortfolio/>}></Route>
      <Route  path='*' element={<NotFound/>}></Route>

     </Routes>

     <Footer/></>

 :<Loader/>
     }
    </div>
  );
}

export default App;
