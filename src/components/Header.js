import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import brand from '../Assets/brand.png'
import './Header.css';
const Header = () => {
  return (
    <div className='navbar'>
            <div>
            <NavLink to="/">
                <img src={brand} alt="logo" className='logo-img' height={80} />
                </NavLink>
            </div>
            <div className='links-cart-div'>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <NavLink to="/" className="links">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className="links">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className="links">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to="/products" className="links">Products</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='btnCartCount'>
                <div className='count'>10</div>
                    <NavLink to="/cart" className="links"><FaShoppingCart className='cart' /></NavLink>
                </div>
            </div>
        </div>
  )
}

export default Header