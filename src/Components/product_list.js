import React from "react";

// Images
import First_Image from '../Img/Image1.png';
import Second_Image from '../Img/Image2.png';
import Third_Image from '../Img/Image5.png';
import Fourth_Image from '../Img/Image4.png';


const ProductList = () => {

    return(
        <div className='product_section'>
            <h2>Category name</h2>
            <div className='product_list'>
                <div className='product_container'>
                    <img src={First_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={Second_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container product_container_out'>
                    <img src={Third_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
            </div>
            <div className='product_list'>
                <div className='product_container'>
                    <img src={Fourth_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={First_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
                <div className='product_container'>
                    <img src={Third_Image} alt='Product_Image' className='product_img'></img>
                    <p className='out_of_stock'>Out of stock</p>
                    <p className='product_title'>Apollo Running Short</p>
                    <p className='product_price'>&#36;50.00</p>
                </div>
            </div>
        </div>
    )

}

export default ProductList;