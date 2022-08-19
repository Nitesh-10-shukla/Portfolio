import React,{useEffect} from 'react';
import NavBar from './shared/navbar.js/Navbar';
import './styles/style.css'
import Home from './containers/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div className='overflow-hidden'>
     <NavBar/>
     <Home/>
    </div>
  );
}

export default App;
