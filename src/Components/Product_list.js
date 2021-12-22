import React from "react";
import { Component } from "react";

// Images


import Logo from '../Img/Logo.png';
import Dollar from '../Img/Dollar_Icon.png';
import Cart from '../Img/Empty_Cart.png';

import { Products } from './arrayofitems'


class ProductList extends Component  {
  


   state = {
    value: [],
    cart: []
 }

 add = (product) => {
     this.setState({
         cart: product
     })
 }



 

   render() {
    let items = Products()
    
        console.log(this.state.cart)
    

    return(
       <div>
           <header>
                <ul className='navigation'>
                    <li><a href='#' className='navigation_list active'>Women</a></li>
                    <li><a href='#' className='navigation_list'>Men</a></li>
                    <li><a href='#' className='navigation_list'>Kids</a></li>
                </ul>
                <div className='logo'>
                    <img src={Logo} alt="Logo" className='logo_icon'></img>
                </div>
                <div className='purchase'>
                    <a href='#'><img src={Dollar} alt="Currency_Icon" className='currency_icon'></img></a>
                    <a href='#'><img src={Cart} alt="Cart" className='cart_icon'></img>{this.state.cart.length}</a>
                </div>
    
            </header>

            <div className='product_section'>
            <h2>Category name</h2>
           
            <div className='product_list' style={{flexWrap:"wrap"}}>
                {items.map((item, index) => {
                    return (
                        <div className='product_container' key={index} style={{border: "1px solid red", width: "50%"}}>
                            <img src={item.image} alt='Product_Image' className='product_img'></img>
                            <div className="cart_icon_1_container"
                                onClick={() => {
                                    this.setState({
                                        cart: this.state.cart + 1
                                    })
                                }} 
                            >
                                <img src={item.carting} alt='Product_Image' className='cart_icon_1'></img>
                            </div>
                            <p className='out_of_stock'>Out of stock</p>
                            <p className='product_title'>{item.title}</p>
                            <p className='product_price'>&#36;{item.price}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
       </div>
    )
   }
    

}

export default ProductList;