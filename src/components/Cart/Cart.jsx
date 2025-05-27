import { useCart } from "../CartContext/CartContext";

const Cart = () => {
  const { cartItem, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItem.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-orange-500">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
