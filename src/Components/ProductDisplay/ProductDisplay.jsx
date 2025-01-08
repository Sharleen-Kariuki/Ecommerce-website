import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext.jsx'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                
                <div className="productdisplay-right-description">
                Welcome to KamiLimu, where we nurture human and technical skills for sustainable success in learning and career. We achieve this through an 9-month structured mentorship program that upskills tertiary-level tech students with competencies in personal and professional development, industry-relevant ICT skills, innovation, scholarship, and community engagement. 
                </div>
                <div className="productdisplay-right-sizes">
                   <h1>Select Size</h1> 
                   <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                   </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women, TShirt, Croptop</p>
                <p className='productdisplay-right-category'><span>Category :</span>Modern, Latest</p>
            </div>

        </div>
 
      </div>
      
    </div>
  )
}

export default ProductDisplay
