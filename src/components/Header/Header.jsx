import { Link } from 'react-router-dom';
import logo from '../../assets/Img/logo.png'
import search from '../../assets/Img/search-01.svg'
import cart from '../../assets/Img/cart.png'
import user from '../../assets/Img/user-circle.svg'

const Header = () => {
 

return (
    <div className=' flex justify-between items-center mt-5 '>
     <div>
      <img src={logo} className=' w-[188px] h-[38px] ml-12'></img>
     </div>

     <div className=' space-x-6'>
      <Link to='/'>Home</Link>
      <Link>All Products</Link>
      <Link>About Us</Link>
      <Link>Shop</Link>
      <Link>Contact Us</Link>
     </div>

     <div className=' flex space-x-6 mr-16'>
     <img src={search} ></img>
     <Link to='/cart'><img src={cart} className=' w-[32px] h-[32px]' ></img></Link>
     
     <img src={user} ></img>
     </div>
     
    </div>
  );
};

export default Header;
