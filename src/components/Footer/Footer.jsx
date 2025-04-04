import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import appStore from '../../assets/Img/image 34.svg'
import playStore from '../../assets/Img/image 33.svg'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section - Logo & Socials */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-500">ShopEase</h2>
          <p className="text-gray-400 mt-2">
            Discover premium lifestyle and tech products, all in one place. Shop smart with ShopEase.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-orange-500 transition" />
            <FaInstagram className="text-xl cursor-pointer hover:text-orange-500 transition" />
            <FaYoutube className="text-xl cursor-pointer hover:text-orange-500 transition" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-orange-500 transition" />
          </div>
          {/* App Download Buttons */}
          <div className="mt-6">
            <img src={playStore} alt="Google Play" className="w-32 mb-2 cursor-pointer" />
            <img src={appStore} alt="App Store" className="w-32 cursor-pointer" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Mobile Devices</li>
            <li className="hover:text-orange-500 cursor-pointer">PC & Laptops</li>
            <li className="hover:text-orange-500 cursor-pointer">Smart Watches</li>
            <li className="hover:text-orange-500 cursor-pointer">Headphones</li>
            <li className="hover:text-orange-500 cursor-pointer">Others</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
            <li className="hover:text-orange-500 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policy</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Privacy & Policy</li>
            <li className="hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-orange-500 cursor-pointer">Others</li>
          </ul>
        </div>
      </div>

      {/* Shops Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-gray-400">
        {/* Dhaka Outlet */}
        <div>
          <h3 className="font-semibold text-white">Our Shops</h3>
          <p className="mt-2">
            <strong>ShopEase Dhaka Outlet</strong> <br />
            Bashundhara City Shopping Complex, Level 3 <br />
            Panthapath, Dhaka 1215, Bangladesh <br />
            📞 +880 1711-123456
          </p>
        </div>

        {/* Chattogram Outlet */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold text-white">ShopEase Chattogram Outlet</h3>
          <p className="mt-2">
            Mehedibag Road, GEC Circle <br />
            Chattogram 4000, Bangladesh <br />
            📞 +880 1819-654321
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        © 2025 ShopEase. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
