
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TemplateGallery from '@/components/TemplateGallery';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <TemplateGallery />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
