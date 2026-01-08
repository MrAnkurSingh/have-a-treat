import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Home = () => {
    return (
       <>
 <>
  <Navbar />

  <main className="min-h-screen w-full bg-[#0f0f0f] text-white flex flex-col items-center">

    
    <div className="FontCard flex flex-col md:flex-row items-center justify-center gap-10 bg-[#1f1f1f] rounded-2xl m-3 mt-10 p-8 max-w-6xl w-full">

      
      <div className="text-center md:w-1/2 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Have a Treat!
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md">
          Delicious desserts for every occasion.
        </p>
      </div>

     
      <div className="flex justify-center md:w-1/2">
        <img
          className="w-48 sm:w-60 md:w-72 lg:w-80 object-contain"
          src="../../public/assets/logo/logoImg.png"
          alt="Have a Treat Logo"
        />
      </div>

    </div>

  </main>
   <Footer />
</>

</>

    );
}

export default Home;
