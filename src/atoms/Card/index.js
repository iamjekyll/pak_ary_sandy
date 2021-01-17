import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {name, price1, price2, img} = props;
    return (
        <div className="pro__ctn">
            <Link to={name}>
                <div className="pro__bx">
                    <img src={img} alt={name} />
                    <h3>{name}</h3>
                    <div className="pro_ptp">
                        <p>6 Bulan</p>
                        <p className="pro__harga">Rp {price1}</p>
                    </div>
                    <div className="pro_pbt">
                        <p>12 Bulan</p>
                        <p className="pro__harga">Rp {price2}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
