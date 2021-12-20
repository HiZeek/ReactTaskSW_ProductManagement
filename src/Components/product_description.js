import React from 'react';

// Components

// import Header from './header';
// import ProductList from './Components/product_list';

// Images
import First_Image from '../Img/Image1.png';

const ProductDescription = () => {
  return(
    <div className='product_description'>
      <div>
        <img src={First_Image} alt='Product_Image'></img>
        <img src={First_Image} alt='Product_Image'></img>
        <img src={First_Image} alt='Product_Image'></img>
      </div>
      <div>
        <img src={First_Image} alt='Product_Image'></img>
      </div>
      <div>
        <h2>Apollo</h2>
        <h2>Running Short</h2>
        <div>
          <h3 className='product_description_headings'>SIZE:</h3>
          <ul className='sizes'>
            <a href='#'><li className='size_xs'>XS</li></a>
            <a href='#'><li className='size_s active_size'>S</li></a>
            <a href='#'><li className='size_m'>M</li></a>
            <a href='#'><li className='size_l'>L</li></a>
          </ul>
        </div>
        <div>
          <h3 className='product_description_headings'>PRICE:</h3>
          <p className='product_description_price_tag'>&#36;50.00</p>
          <button className='cart_btn'>Add to Cart</button>
          <p className='product_description_text'>Find stunning women's cocktail dresses and<br></br>party dresses. Stand out in lace and<br></br>metallic cocktail dresses and party<br></br>dresses from all your favorite brands.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription;