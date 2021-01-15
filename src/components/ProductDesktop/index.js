import React from 'react'
import { CardDesktop } from '../../atoms'
import './ProductDesktop.css'

import { Diamond, DiamondPlus, Gold, Platinum } from '../../assets'


const ProductDesktop = () => {
    return (
        <div className="pd_wrap">
            <div className="pd_title">
                <h2>Pilihan Promo Transvision</h2>
            </div>
            <div className="pd_container">
                <CardDesktop nama="Gold+" harga="750.000" img={Gold} />
                <CardDesktop nama="Platinum" harga="1.100.000" img={Platinum} />
                <CardDesktop nama="Diamond" harga="1.600.000" img={Diamond} />
                <CardDesktop nama="Diamond+" harga="1.800.000" img={DiamondPlus} />
            </div>
        </div>
    )
}

export default ProductDesktop
