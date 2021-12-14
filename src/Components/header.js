import React, {Component} from "react";

// Images
import Logo from '../Img/Logo.png';
import Dollar from '../Img/Dollar_Icon.png';
import Cart from '../Img/Empty_Cart.png';

const Header = () => {

        return(
            <header>
                <ul className='navigation'>
                    <li><a href='#' className='navigation_list active'>Women</a></li>
                    <li><a href='#' className='navigation_list'>Men</a></li>
                    <li><a href='#' className='navigation_list'>Kids</a></li>
                </ul>
                <div className='logo'>
                    <a href='#'><img src={Logo} alt="Logo" className='logo_icon'></img></a>
                </div>
                <div className='purchase'>
                    <a href='#'><img src={Dollar} alt="Currency_Icon" className='currency_icon'></img></a>
                    <a href='#'><img src={Cart} alt="Cart" className='cart_icon'></img></a>
                </div>
    
            </header>
        )

}

export default Header;