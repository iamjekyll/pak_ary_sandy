import React from 'react'
import { Diamond, DiamondPlus, Gold, Platinum } from '../../assets'
import { Card } from '../../atoms'
import './Product.css'

const Product = () => {
    return (
        <div className="product_wrap">
            <Card name="gold" img={Gold} price1="750.000" price2="1.300.000" />
            <Card name="platinum" img={Platinum} price1="1.100.000" price2="1.900.000" />
            <Card name="diamond" img={Diamond} price1="1.600.000" price2="2.400.000" />
            <Card name="diamond+" img={DiamondPlus} price1="1.800.000" price2="3.100.000" />
        </div>
    )
}

export default Product
