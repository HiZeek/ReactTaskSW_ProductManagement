import React, {Component} from "react";

// Component
import Logo from '../Img/Logo.png';
import Dollar from '../Img/Dollar_Icon.png';
import Cart from '../Img/Empty_Cart.png';
// import { render } from "react-dom";

const Header = () => {

        const styles = {
            header: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            navigation: {
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '32px'
            },
            navigation_list: {
                textDecoration: 'none',
                color: '#1D1F22'
            },
            active: {
                textDecoration: 'none',
                color: '#5ECE7B',
                borderBottom: '2px solid #5ECE7B',
                paddingBottom: '15px'
            },
            currency_icon: {
                height: '30px',
                width: '40px',
                paddingRight: '10px'
            },
            cart_icon: {
                height: '25px',
                width: '25px',
                paddingRight: '10px'
            },
            logo_icon: {
                height: '25px',
                width: '25px',
            }
        }

        return(
            <header style = {styles.header}>
                <ul className = 'navigation' style = {styles.navigation}>
                    <li><a href='#' className='navigation_list active' style={styles.navigation_list, styles.active}>Women</a></li>
                    <li><a href='#' className='navigation_list' style={styles.navigation_list}>Men</a></li>
                    <li><a href='#' className='navigation_list' style={styles.navigation_list}>Kids</a></li>
                </ul>
                <div className = 'logo'>
                    <img src={Logo} alt="Logo" className='logo_icon' style={styles.logo_icon}></img>
                </div>
                <div className = 'purchase'>
                    <img src={Dollar} alt="Currency_Icon" className='currency_icon' style={styles.currency_icon}></img>
                    <img src={Cart} alt="Cart" className='cart_icon' style={styles.cart_icon}></img>
                </div>
    
            </header>
        )

}

export default Header;