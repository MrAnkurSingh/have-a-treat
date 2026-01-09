import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const bgImages = [
  "../public/assets/slider/bg1.jpg",
  "../public/assets/slider/bg2.jpg",
  "../public/assets/slider/bg3.jpg",
  "../public/assets/slider/bg4.jpg",
  "../public/assets/slider/bg5.jpg",
  "../public/assets/slider/bg6.jpg",
  "../public/assets/slider/bg7.jpg",
  "../public/assets/slider/bg8.jpg",
  "../public/assets/slider/bg9.jpg",
  "../public/assets/slider/bg10.jpg",
];

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-[#0f0f0f] text-white flex flex-col items-center">

       
        <div className="relative max-w-6xl w-full m-3 mt-25 rounded-2xl overflow-hidden h-1/2md:h-96">

         
          {bgImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentBg ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

        
          <div className="absolute inset-0 bg-black/60 " />

        
          <div className="relative z-20 FontCard flex flex-col md:flex-row items-center justify-center gap-10 min-h-[300px]">

            <div className="text-center md:w-1/2 flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                Welcome to Have a Treat!
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md">
                Delicious desserts for every occasion.
              </p>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Home;
