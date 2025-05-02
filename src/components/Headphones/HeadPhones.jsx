import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react"; 

const HeadPhones = () => {
  const [headphone, setHeadphone] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("headphones.json")
      .then((res) => res.json())
      .then((data) => setHeadphone(data));
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, headphone.length));
  };
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="p-8 w-full bg-gray-100">
       {/* Modal */}
       {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center h-[300px]" >
            <img
              src={selectedProduct.photo}
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
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headphone.slice(0, visibleCards).map((headphones) => (
          <div
            key={headphones.id}
            className="bg-white rounded-2xl shadow p-4 relative hover:shadow-md transition"
          >
            <div className="absolute top-3 right-3 flex gap-2">
              <button onClick={() => handleAddToCart(headphones)} className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                
                <ShoppingCart size={18} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={18} />
              </button>
            </div>
            <div className="group">
  <img
    src={headphones.photo}
    alt={headphones.productName}
    className="w-full h-40 object-contain mb-3 transition-transform duration-400 ease-in-out group-hover:scale-113 group-hover:z-10"
  />
</div>

            <h2 className="text-lg font-semibold mb-1">
              {headphones.productName}
            </h2>
            <div className="text-sm">
              {headphones.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  {headphones.oldPrice}
                </span>
              )}
              <span className="text-lg text-orange-500 font-semibold">{headphones.price}</span>
            </div>
          </div>
        ))}
      </div>

      {visibleCards < headphone.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-black text-white px-6 py-2 rounded text-lg hover:bg-gray-800 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadPhones;
