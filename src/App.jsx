import React from 'react';
import Navbar from './components/Navbar/Navbar/';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Mywork from './components/Mywork/Mywork';
import MyServices from './components/MyServices/MyServices';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <Mywork />
      <Contact/>
    </div>
  );
};

export default App;
