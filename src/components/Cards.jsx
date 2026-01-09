import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Chocolate Cake",
    desc: "Rich & moist chocolate delight",
    image: "https://sp.yimg.com/ib/th?&id=ODL.d0821660b593862c9e460a660d9bfbb7&w=148&h=148&c=4&dpr=2&rs=1",
  },
  {
    id: 2,
    title: "Cream Pastry",
    desc: "Light, fluffy & freshly baked",
    image: "https://tse1.mm.bing.net/th/id/OIP.KdkXmjrC42LieDoSFj6nMgHaGf?pid=Api&rs=1&c=1&qlt=95&w=134&h=117",
  },
  {
    id: 3,
    title: "Butter Cookies",
    desc: "Crispy & buttery perfection",
    image: "https://tse1.mm.bing.net/th/id/OIP.txDK3z2O6GyZrdVy6eWbxwHaLG?pid=Api&rs=1&c=1&qlt=95&w=81&h=121",
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
            className="group relative bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            {/* TEXT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>

            {/* HOVER OVERLAY (FIXED) */}
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
