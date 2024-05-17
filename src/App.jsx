import React from 'react';
import Navbar from './components/Navbar/Navbar/';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Mywork from './components/Mywork/Mywork';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Mywork />
    </div>
  );
};

export default App;
