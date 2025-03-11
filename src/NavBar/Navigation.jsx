import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import momo from "../assets/momo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartProvider";
import { CgProfile } from "react-icons/cg";
import UserProfile from "../pages/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";
import {FaUserCircle} from "react-icons/fa";


function Navigation() {

  const{user, isAuthenticated}=useAuth0();
  const { state } = useContext(CartContext);

  const totalCartItem = state.cartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div>
      <div className="border-2 flex justify-around">
        <NavLink to="/" className="  flex justify-between items-center gap-2">
          <img src={momo} alt="" />
          Momos{" "}
        </NavLink>
        <div className="  flex justify-between items-center w-96">
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/ourMenu">Our Menu</NavLink>
          <NavLink to="/ourService">Our Services</NavLink>
          <NavLink to="/allergyAdvice">Allergy Advised</NavLink>
          <NavLink to="/cartPage">
            {totalCartItem}
            <MdShoppingCart />
          </NavLink>
        </div>
        
          
        <div className="flex gap-5  justify-center items-center">
          {/* <NavLink className="text-white text-xl h-12 w-20 rounded-full bg-amber-600 justify-center items-center flex" to="/login">Log In</NavLink> */}
          <NavLink className="text-white text-xl h-12 w-20 rounded-full bg-amber-600 justify-center items-center flex" to="/signUp">Sign Up</NavLink>
        </div>
        

        <div className="flex gap-5  justify-center items-center border-red-500">
          <NavLink target="_blank" to="https://www.facebook.com/">
            <FaFacebook />
          </NavLink>
          <NavLink target="_blank" to="https://www.instagram.com/">
            <FaInstagram />
          </NavLink>
          <NavLink target="_blank" to="https://www.tiktok.com/en/">
            <FaTiktok />
          </NavLink>

          <NavLink
            className="text-white text-xl h-12 w-40 rounded-full bg-amber-600 justify-center items-center flex"
            to="/contact"
          >
            Contact
          </NavLink>
        
       
          {isAuthenticated?(
            <NavLink to="/userProfile">
              <img className="rounded-full h-10"src={user.picture}alt=""/>
              </NavLink>
          ):(
            <FaUserCircle size={32} color="red"/>
        )}
        </div>
          
        </div>
        
      </div>
    
  );
}

export default Navigation;
