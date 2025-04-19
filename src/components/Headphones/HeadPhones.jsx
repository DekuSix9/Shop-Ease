import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react"; 

const HeadPhones = () => {
    const [headphone, setheadphone] = useState([]);
    
      useEffect(() => {
        fetch("headphones.json")
          .then((res) => res.json())
          .then((data) => setheadphone(data));
      }, []);
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headphone.map((headphones) => (
          <div
            key={headphones.id}
            className="bg-white rounded-2xl shadow p-4 relative hover:shadow-md transition"
          >
            <div className="absolute top-3 right-3 flex gap-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ShoppingCart size={18} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={18} />
              </button>
            </div>
            <img
              src={headphones.photo}
              alt={headphones.productName}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-base font-semibold mb-1">
              {headphones.productName}
            </h2>
            <div className="text-sm">
              {headphones.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  {headphones.oldPrice}
                </span>
              )}
              <span className="text-orange-500 font-semibold">{headphones.price}</span>
            </div>
          </div>
        ))}
      </div>
    );
};

export default HeadPhones;