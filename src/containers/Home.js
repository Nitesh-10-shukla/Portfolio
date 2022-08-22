import React from 'react';
import Header from '../shared/header/Header';
import About from '../shared/about/AboutUs';
import Works from '../shared/works/Works';
import Portfolio from '../shared/Portfolio/Portfolio';
import ContactUs from '../shared/contact/ContactUs';
import Skill from '../shared/skill/Skill';
const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Works/>
      <Skill/>
      <Portfolio/>
      <ContactUs/>
    </div>
  )
}

export default Home