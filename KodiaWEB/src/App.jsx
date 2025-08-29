// my-react-portfolio/src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import SocialMediaBar from './components/SocialMediaBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Servicios from './components/Servicios.jsx';
import Trabajos from './components/Trabajos.jsx';
import AcercaDe from './components/AcercaDe.jsx';
import FAQ from './components/FAQ.jsx';
import Sobremi from './components/Sobremi.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import SmoothScrollWrapper from './Efectos/ScrollMotion.jsx';

function App() {
  return (
    <>
      <Header />
      <SocialMediaBar />
      <SmoothScrollWrapper>
        <main>
          <HeroSection />
        </main>
        <Servicios />
        <Trabajos />
        <AcercaDe />
        <FAQ />
        <Sobremi />
        <ContactSection />
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
}

export default App;