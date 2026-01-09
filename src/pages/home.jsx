import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-[#0f0f0f] text-white flex flex-col items-center">
        
        <div className="FontCard flex flex-col md:flex-row items-center justify-center gap-10 bg-[#1f1f1f] rounded-2xl m-3 mt-10 p-8 max-w-6xl w-full">
          {/* Your hero content / slider will go here */}
          <HeroSlider />
        </div>
       
      </main>

      <Footer />
    </>
  );
};

export default Home;
