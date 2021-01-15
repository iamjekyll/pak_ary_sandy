import React from 'react'

const Showcase = (props) => {
    const {name} = props;
    return (
        <div className="product_promo">
            <div className="product_title">
                <h2>Special Promo</h2>
            </div>
            <div className="product_content">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Showcase
