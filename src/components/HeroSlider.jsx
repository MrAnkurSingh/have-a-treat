import Slider from "react-slick";

const NAVBAR_HEIGHT = 80; // must match navbar height

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      img: "/assets/hero/slide1.jpg",
      title: "Fast Delivery, Fresh Taste 🚚",
      desc: "Order online & enjoy at home",
    },
    {
      img: "/assets/hero/slide2.jpg",
      title: "Freshly Baked Happiness 🍰",
      desc: "Made with love every day",
    },
    {
      img: "/assets/hero/slide3.jpg",
      title: "Cakes for Every Occasion 🎂",
      desc: "Celebrate with sweetness",
    },
  ];

  return (
    <section
      className="w-full"
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative w-full flex items-center justify-center bg-cover bg-center"
              style={{
                height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  {slide.desc}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
