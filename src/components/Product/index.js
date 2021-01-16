import React from 'react'
import { Diamond, DiamondPlus, Gold, Platinum } from '../../assets'
import { Card } from '../../atoms'
import './Product.css'

const Product = () => {
    return (
        <div className="product_wrap">
            <Card name="gold" img={Gold} price1="750.000" price2="1.300.000" info1="6 Bulan" info2="12 Bulan" />
            <Card name="platinum" img={Platinum} price1="750.000" price2="1.300.000" info1="6 Bulan" info2="12 Bulan" />
            <Card name="diamond" img={Diamond} price1="750.000" price2="1.300.000" info1="6 Bulan" info2="12 Bulan" />
            <Card name="diamond+" img={DiamondPlus} price1="750.000" price2="1.300.000" info1="6 Bulan" info2="12 Bulan" />
        </div>
    )
}

export default Product
