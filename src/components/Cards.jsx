import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Cookies",
    desc: "Freshly baked, crispy & buttery cookies",
    image: "/assets/items/image1.png",
  },
  {
    id: 2,
    title: "Cakes",
    desc: "Soft, rich & creamy celebration cakes",
    image: "/assets/items/image2.png",
  },
  {
    id: 3,
    title: "Cupcakes",
    desc: "Mini delights with creamy frosting",
    image: "/assets/items/image3.png",
  },
];


const ProductCards = () => {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Delicious Treats 🍰
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative  rounded-xl overflow-hidden"
          >
           
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

      
            <div className="p-6 flex justify-center flex-col items-center bg-white">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>

            
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Link
                to={`/product/${item.id}`}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
