import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCards from "../components/Cards";

const bgImages = [
  "/assets/slider/bg1.jpg",
  "/assets/slider/bg2.jpg",
  "/assets/slider/bg3.jpg",
  "/assets/slider/bg4.jpg",
  "/assets/slider/bg5.jpg",
  "/assets/slider/bg6.jpg",
  "/assets/slider/bg7.jpg",
  "/assets/slider/bg8.jpg",
  "/assets/slider/bg9.jpg",
  "/assets/slider/bg10.jpg",
];

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#FFF6ED]">

       
        <section className="relative min-h-screen w-full overflow-hidden">

      
          {bgImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentBg ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          
          <div className="absolute inset-0" />

         
          <div
            className={`relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6
            transition-all duration-5000 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#E76F51] ">
              Have a Treat
            </h1>

            <p className="mt-4 text-base font-bold md:text-lg text-white max-w-xl">
              Hand-crafted desserts made with love and premium ingredients.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-[#E76F51] text-white font-medium hover:bg-white hover:text-[#E76F51] transition">
              Explore Desserts
            </button>
          </div>
        </section>

       
        <section className="py-20 bg-white">
         <ProductCards />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;