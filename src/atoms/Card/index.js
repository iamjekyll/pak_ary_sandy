import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {name, price1, price2, img, info1, info2} = props;
    return (
        <div className="pro__ctn">
            <Link to={name}>
                <div className="pro__bx">
                    <img src={img} alt={name} />
                    <h3>{name}</h3>
                    <p>{info1}</p>
                    <p>{price1}</p>
                    <p>{info2}</p>
                    <p>{price2}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
