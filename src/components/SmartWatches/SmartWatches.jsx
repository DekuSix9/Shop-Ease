import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const SmartWatches = () => {
  const [smartwatches, setsmartwatches] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);

  useEffect(() => {
    fetch("smartwatches.json")
      .then((res) => res.json())
      .then((data) => setsmartwatches(data));
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, smartwatches.length));
  };

  return (
    <div className="p-8 w-full bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {smartwatches.slice(0, visibleCards).map((smartwatche) => (
          <div
            key={smartwatche.id}
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
            <div className="group">
  <img
    src={smartwatche.photo}
    alt={smartwatche.productName}
    className="w-full h-40 object-contain mb-3 transition-transform duration-400 ease-in-out group-hover:scale-113 group-hover:z-10"
  />
</div>

            <h2 className="text-lg font-semibold mb-1">
              {smartwatche.productName}
            </h2>
            <div className="text-sm">
              {smartwatche.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  {smartwatche.oldPrice}
                </span>
              )}
              <span className="text-lg text-orange-500 font-semibold">
                {smartwatche.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      {visibleCards < smartwatches.length && (
          <div className="flex justify-center mt-8">
          <button onClick={handleShowMore} className="bg-black text-white px-6 py-2 rounded text-lg hover:bg-gray-800 transition">
            Show More
          </button>
        </div>
      )}
      
    
    </div>
  );
};

export default SmartWatches;
