import { useState } from "react";
import mobileImg from '../../assets/Img/image 7.png'
import watchImg from "../../assets/Img/image 1.png";
import laptopImg from "../../assets/Img/image 2.png";
import headphonesImg from "../../assets/Img/image 4.png";

const allCards = [
  { title: "Iphone 16 pro Max (128 GB)", price: "Tk. 1,16,000", oldPrice: "Tk. 1,20,000", img: mobileImg },
  { title: "Google Home Mini", price: "Tk. 19,990", oldPrice: "Tk. 20,390", img: watchImg, label: "SALE" },
  { title: "Xiaomi ENCHEN Boost Hair Trimmer", price: "Tk. 1,500", oldPrice: "Tk. 1,320", img: laptopImg },
  { title: "AirPods Pro (2nd generation)", price: "Tk. 25,000", oldPrice: "Tk. 24,850", img: headphonesImg, label: "10% OFF" },
  { title: "Smart Watch", price: "Tk. 12,000", oldPrice: "Tk. 14,000", img: watchImg },
  { title: "Laptop", price: "Tk. 85,000", oldPrice: "Tk. 90,000", img: laptopImg },
  { title: "Gaming Headset", price: "Tk. 8,500", oldPrice: "Tk. 9,500", img: headphonesImg, label: "SALE" },
  { title: "Smartphone", price: "Tk. 95,000", oldPrice: "Tk. 100,000", img: mobileImg },
  { title: "Smart Watch", price: "Tk. 12,000", oldPrice: "Tk. 14,000", img: watchImg },
  { title: "Laptop", price: "Tk. 85,000", oldPrice: "Tk. 90,000", img: laptopImg },
  { title: "Gaming Headset", price: "Tk. 8,500", oldPrice: "Tk. 9,500", img: headphonesImg, label: "SALE" },
  { title: "Smartphone", price: "Tk. 95,000", oldPrice: "Tk. 100,000", img: mobileImg }
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, allCards.length));
  };

  return (
    <div className="w-full py-8 bg-gray-100">
      <h2 className="text-center text-2xl font-semibold mb-6">Featured products</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {allCards.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="w-72 p-4 bg-white rounded-lg shadow-lg relative group">
            {card.label && (
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                {card.label}
              </span>
            )}
            <img 
              src={card.img} 
              alt={card.title} 
              className="w-full h-40 object-contain mb-3 transition-transform duration-400 ease-in-out group-hover:scale-113 group-hover:z-10"
            />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-400 line-through">{card.oldPrice}</p>
            <p className="text-lg text-orange-500 font-semibold">{card.price}</p>
          </div>
        ))}
      </div>
      {visibleCards < allCards.length && (
        <div className="flex justify-center mt-6">
          <button onClick={handleShowMore} className="bg-black text-white px-6 py-2 rounded text-lg">Show More</button>
        </div>
      )}
    </div>
  );
};

export default Features;
