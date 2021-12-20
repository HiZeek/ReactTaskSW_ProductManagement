import React from "react";

// Images
import First_Image from '../Img/Image1.png';
import Second_Image from '../Img/Image2.png';
import Third_Image from '../Img/Image5.png';
import Fourth_Image from '../Img/Image4.png';
import Cart1 from '../Img/Empty_Cart_1.png';
import { Link } from "react-router-dom";


const ProductList = () => {
    const x = () => {
        console.log('hello')
    };

    return(
        <div className='product_section'>
            <h2>Category name</h2>
            <Link to="/product_description">Hello</Link>
            <div className='product_list'>
                <div className='product_container'>
                    <img src={First_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container" onClick={x}>
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={Second_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container">
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container product_container_out'>
                    <img src={Third_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container">
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
            </div>
            <div className='product_list'>
                <div className='product_container'>
                    <img src={Fourth_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container">
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={First_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container">
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={Third_Image} alt='Product_Image' className='product_img'></img>
                    <div className="cart_icon_1_container">
                        <img src={Cart1} alt='Product_Image' className='cart_icon_1'></img>
                    </div>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
            </div>
        </div>
    )

}

export default ProductList;