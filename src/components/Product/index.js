import React from 'react'
import { Diamond, DiamondPlus, Gold, Platinum } from '../../assets'
import { Card, Showcase } from '../../atoms'
import './Product.css'

const Product = () => {
    return (
        <div className="product_wrap">
            <div className="product_container">
                <Showcase name='Gold+' />
            </div>
            <div className="product_list">
                <Card name='Paket Gold +' link={Gold} price1="750.000" price2="1.300.000" info1="6 Bulan" info2="12 Bulan" />
            </div>
            <div className="product_container">
                <Showcase name='Platinum' />
            </div>
            <div className="product_list">
                <Card name='Paket Gold +' link={Platinum} price1="1.100.000" price2="1.900.000" info1="6 Bulan" info2="12 Bulan" />
            </div>
            <div className="product_container">
                <Showcase name='Diamond' />
            </div>
            <div className="product_list">
                <Card name='Paket Gold +' link={Diamond} price1="1.600.000" price2="2.400.000" info1="6 Bulan" info2="12 Bulan" />
            </div>
            <div className="product_container">
                <Showcase name='Diamond+' />
            </div>
            <div className="product_list">
                <Card name='Paket Gold +' link={DiamondPlus} price1="1.800.000" price2="3.100.000" info1="6 Bulan" info2="12 Bulan" />
            </div>
        </div>
    )
}

export default Product
