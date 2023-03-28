import logo from "../assets/veglogo.svg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useState } from "react";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="flex h-max bg-slate-200 py-2">
      <div className='w-[20%] flex justify-center'>
        <img src={logo} alt="" width={80} className="" />
      </div>
      <div className="searchbox m-0 p-5 w-[60%] h-20 flex justify-center gap-2">
        <input type="text" className="text-xl outline-none border-none bg-gray-300 w-[50%] rounded-lg pl-2" placeholder="search"/>
        <button className="bg-orange-500 w-[20%] text-xl rounded-lg">Search</button>
      </div>
      <div className="p-5 w-[20%] flex gap-3 justify-center">
        <Link to='/cart' className=" relative border p-2 font-bold">
            <ShoppingCartIcon/>
            <span className="absolute top-0 right-1 text-center rounded-[50%] bg-orange-500 h-5 w-5 text-sm">2</span>
        </Link>
    
        {
            isLoggedIn ? 
            <Link to='/' className="border p-2 font-bold" onClick={() => setIsLoggedIn(false)}>Log In</Link> :
            <Link to='/' className="border p-2 font-bold" onClick={() => setIsLoggedIn(true)}>Log Out</Link>
        }
        
      </div>
    </div>
  );
};

export default Header;
