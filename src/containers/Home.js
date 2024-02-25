import React, { useState, useEffect } from 'react';
import Header from '../shared/header/Header';
const LazyAbout = React.lazy(() => import('../shared/about/AboutUs'));
const LazyWorks = React.lazy(() => import('../shared/works/Works'));
const LazySkill = React.lazy(() => import('../shared/skill/Skill'));
const LazyPortfolio = React.lazy(() => import('../shared/Portfolio/Portfolio'));
const LazyContactUs = React.lazy(() => import('../shared/contact/ContactUs'));

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    works: false,
    skill: false,
    portfolio: false,
    contact: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prevState => ({
            ...prevState,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.5 });

    const targets = document.querySelectorAll('.lazy-load');
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyAbout className={isVisible.about ? 'visible' : 'hidden'} />
        <LazyWorks className={isVisible.works ? 'visible' : 'hidden'} />
        <LazySkill className={isVisible.skill ? 'visible' : 'hidden'} />
        <LazyPortfolio className={isVisible.portfolio ? 'visible' : 'hidden'} />
        <LazyContactUs className={isVisible.contact ? 'visible' : 'hidden'} />
      </React.Suspense>
    </div>
  );
}

export default Home;