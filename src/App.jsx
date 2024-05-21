import React from 'react';
import Navbar from './components/Navbar/Navbar/';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Mywork from './components/Mywork/Mywork';
import MyServices from './components/MyServices/MyServices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <Mywork />
      <Contact/>
      {/* <ToastContainer/> */}
      <Footer/>
    </div>
  );
};

export default App;
