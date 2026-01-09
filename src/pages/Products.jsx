import React, { useState } from 'react'
import {Star, ShoppingCart, Truck, Leaf, Minus, Plus} from  'lucide-react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Products = () => {
    const [quantity,setQuantity]= useState(1);

    const product= {
        name: "Chocolate Cake",
    price: 249,
    rating: 4.8,
    reviews: 120,
    description: "Rich & moist chocolate delight, handcrafted with premium Belgian cocoa and a silky ganache finish. A signature dessert from our bakery.",
    images: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000",
      "https://images.unsplash.com/photo-1559622314-8027d00f727c?q=80&w=1000"
    ]
    };
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8"></div> 
    </>
  )
}

export default Products