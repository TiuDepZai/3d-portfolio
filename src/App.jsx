import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero } from './components';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Contact = lazy(() => import('./components/Contact'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Footer = lazy(() => import('./components/Footer'));


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />

        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
