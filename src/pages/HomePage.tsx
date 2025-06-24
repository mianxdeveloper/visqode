import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <ClientLogos />
      <About />
      <Projects />
      <Services />
      <Blog />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;