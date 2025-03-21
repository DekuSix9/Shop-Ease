import { useEffect, useState } from "react";
import firstImg from '../../assets/Img/image 1.png'
const banners = [
  {
    color: "bg-[#798675]",
    title: "Elevate Your Sound and Maximize Your Style",
    price: "Tk. 36,500",
    img:firstImg,
    titlePos: "top-4 left-4",
    imgPos: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    pricePos: "bottom-4 left-4",
    buttonPos: "bottom-4 right-4"
  },
  {
    color: "bg-blue-200",
    title: "Experience Pure Audio Bliss",
    price: "Tk. 42,000",
    img:firstImg,
    titlePos: "top-4 right-4",
    imgPos: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    pricePos: "bottom-4 right-4",
    buttonPos: "bottom-4 left-4"
  },
  {
    color: "bg-red-200",
    title: "Unmatched Comfort and Performance",
    price: "Tk. 38,500",
    img:firstImg,
    titlePos: "bottom-4 left-4",
    imgPos: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    pricePos: "top-4 right-4",
    buttonPos: "top-4 left-4"
  },
  {
    color: "bg-yellow-200",
    title: "Hear Every Detail Like Never Before",
    price: "Tk. 40,500",
    img:firstImg,
    titlePos: "bottom-4 right-4",
    imgPos: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    pricePos: "top-4 left-4",
    buttonPos: "bottom-4 left-4"
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-[600px] relative mt-5">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-[85%] h-[550px] rounded-xl p-6 flex transition-opacity duration-500 shadow-lg ${banner.color} ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className={`absolute text-white text-2xl font-bold ${banner.titlePos}`}>{banner.title}</h2>
          <img src={banner.img} alt="Product" className={`absolute w-40 h-40 object-contain ${banner.imgPos}`} />
          <span className={`absolute text-white text-md font-bold ${banner.pricePos}`}>{banner.price}</span>
          <button className={`absolute bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md ${banner.buttonPos}`}>Shop Now →</button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
