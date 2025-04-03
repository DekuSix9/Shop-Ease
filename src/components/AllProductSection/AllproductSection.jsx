import { useState, useEffect } from "react";

import upArrow from '../../assets/Img/Frame 7 (1).png'
import mobileImg from "../../assets/Img/Frame 9.png";
import watchImg from "../../assets/Img/image 1.png";
import laptopImg from "../../assets/Img/image 2.png";
import headphonesImg from "../../assets/Img/image 4.png";
import tabletImg from "../../assets/Img/image 7.png";
import accessoriesImg from "../../assets/Img/Frame 9.png";

const cards = [
  { title: "Mobile Devices", items: 120, img: mobileImg, label: "SALE" },
  { title: "Smart Watches", items: 79, img: watchImg, label: "SALE" },
  { title: "PC & Laptops", items: 24, img: laptopImg, label: "SALE" },
  { title: "Headphones", items: 120, img: headphonesImg, label: "10% OFF" },
  { title: "Tablets", items: 45, img: tabletImg, label: "SALE" },
  { title: "Accessories", items: 90, img: accessoriesImg, label: "15% OFF" }
];

const AllproductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 2) % cards.length; 
      });
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return (prev - 2 + cards.length) % cards.length; 
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return (prev + 2) % cards.length; 
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }} 
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[25%] flex justify-center">
            <div className="w-64 p-4 bg-white rounded-lg shadow-md flex flex-col items-center relative">
              <div className="w-full bg-[#F8F8F8] p-4 rounded-lg"> 
                <span className="text-gray-500 text-sm">{card.items} Items</span>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <div className="absolute top-14 right-5 text-xl text-gray-600"> 
                  <img src={upArrow}></img>
                </div>
                <img src={card.img} alt={card.title} className="w-24 h-24 object-contain my-2" />
                <span className="text-orange-500 border border-orange-500 px-2 py-1 text-xs rounded">{card.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
      >
        <i className="fas fa-chevron-left text-gray-600" style={{ fontSize: "20px" }}></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
      >
        <i className="fas fa-chevron-right text-gray-600" style={{ fontSize: "20px" }}></i>
      </button>
    </div>
  );
};

export default AllproductSection;
