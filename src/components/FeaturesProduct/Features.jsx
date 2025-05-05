import { useState } from "react";
import mobileImg from '../../assets/Img/Luxury-24k-Gold-iPhone-16-Pro-Pro-Max.webp';
import watchImg from "../../assets/Img/image 1.png";
import laptopImg from "../../assets/Img/image 2.png";
import headphonesImg from "../../assets/Img/image 4.png";
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from "react-router-dom";

const allCards = [
  {id:1, title: "Iphone 16 pro Max (128 GB)", price: "Tk. 1,16,000", oldPrice: "Tk. 1,20,000", img: mobileImg },
  {id:2, title: "Google Home Mini", price: "Tk. 19,990", oldPrice: "Tk. 20,390", img: watchImg, label: "SALE" },
  {id:3, title: "Xiaomi ENCHEN Boost Hair Trimmer", price: "Tk. 1,500", oldPrice: "Tk. 1,320", img: laptopImg },
  {id:4, title: "AirPods Pro (2nd generation)", price: "Tk. 25,000", oldPrice: "Tk. 24,850", img: headphonesImg, label: "10% OFF" },
  {id:5, title: "Smart Watch", price: "Tk. 12,000", oldPrice: "Tk. 14,000", img: watchImg },
  {id:6, title: "Laptop", price: "Tk. 85,000", oldPrice: "Tk. 90,000", img: laptopImg },
  {id:7, title: "Gaming Headset", price: "Tk. 8,500", oldPrice: "Tk. 9,500", img: headphonesImg, label: "SALE" },
  {id:8, title: "Smartphone", price: "Tk. 95,000", oldPrice: "Tk. 100,000", img: mobileImg },
  { id:9, title: "Smart Watch", price: "Tk. 12,000", oldPrice: "Tk. 14,000", img: watchImg },
  {id:10, title: "Laptop", price: "Tk. 85,000", oldPrice: "Tk. 90,000", img: laptopImg },
  {id:11, title: "Gaming Headset", price: "Tk. 8,500", oldPrice: "Tk. 9,500", img: headphonesImg, label: "SALE" },
  {id:12, title: "Smartphone", price: "Tk. 95,000", oldPrice: "Tk. 100,000", img: mobileImg }
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, allCards.length));
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent bubbling
    setSelectedProduct(product);
    setShowModal(true);
  };





  return (
    <div className="w-full py-8 bg-gray-100">

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center h-[300px]" >
            <img
              src={selectedProduct.img}
              alt="Product"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h2 className="text-2xl font-semibold mb-2">Added to Cart!</h2>
            <p className="text-gray-600 mb-6">
              Your item is now in your cart. Ready to check out
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Keep Shopping
              </button>
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-center text-2xl font-semibold mb-6">Featured products</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {allCards.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="w-72 p-4 bg-white rounded-lg shadow-lg relative group transition hover:shadow-2xl">
            
          
            {card.label && (
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                {card.label}
              </span>
            )}

           
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <Link 
                onClick={(e) => handleAddToCart(card, e)}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 hover:scale-110 transition"
              >
                <ShoppingCart size={18} />
              </Link>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 hover:scale-110 transition">
                <Heart size={18} />
              </button>
            </div>

            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-contain mb-3 transition-transform duration-400 ease-in-out group-hover:scale-105"
            />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-400 line-through">{card.oldPrice}</p>
            <p className="text-lg text-orange-500 font-semibold">{card.price}</p>
          </div>
        ))}
      </div>

      
      {visibleCards < allCards.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-black text-white px-6 py-2 rounded text-lg hover:bg-gray-800"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Features;
