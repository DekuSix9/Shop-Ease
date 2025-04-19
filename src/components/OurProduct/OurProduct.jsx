import { NavLink } from "react-router-dom";

const OurProduct = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center py-5">
        <h1 className=" text-3xl font-bold">Our Products</h1>
      </div>

      <div className="flex gap-6 justify-center items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? 'bg-[#E27A1E] text-white p-2 rounded-lg'
              : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
          }
        >
          All
        </NavLink>
        <NavLink
          to="/mobiles"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#E27A1E] text-white p-2 rounded-lg'
              : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
          }
        >
          Mobiles
        </NavLink>
        <NavLink
          to="/laptops"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#E27A1E] text-white p-2 rounded-lg'
              : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
          }
        >
          PC & Laptops
        </NavLink>
        <NavLink
          to="/headphones"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#E27A1E] text-white p-2 rounded-lg'
              : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
          }
        >
        Headphones
        </NavLink>
       
        <NavLink
          to="/smartwatches"
          className={({ isActive }) =>
            isActive
              ? 'bg-[#E27A1E] text-white p-2 rounded-lg'
              : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
          }
        >
         Smart Watches
        </NavLink>
      </div>
    </div>
  );
};

export default OurProduct;
