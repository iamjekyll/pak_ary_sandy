import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className="product_wrap">
            <div className="product_container">
            <div className="product_promo">
                <div className="product_title">
                    <h2>Special Promo</h2>
                </div>
                <div className="product_content">
                    <p>Gold+</p>
                </div>
            </div>
            </div>
            <div className="paket_goldplus">
                <h3>Paket Gold+</h3>
                <img className="goldplus" src="https://transvisionku.com/wp-content/uploads/2019/04/paket-gold-plus.png" alt="gold+" />
            </div>
        </div>
    )
}

export default Product
