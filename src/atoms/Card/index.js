import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const {name, price1, price2, link, info1, info2} = props;
    return (
        <div className="card_container">
            <div className="card_wrap">
                <div className="cardsss">
                    <img className="goldplus" src={link} alt={name} />
                </div>
                <div className="card_info">
                    <div className="card_kiri">
                        <p className="card_info_info">{info1}</p>
                        <p className="card_price">Rp {price1}</p>
                    </div>
                    <div className="card_kanan">
                        <p className="card_info_info">{info2}</p>
                        <p className="card_price">Rp {price2}</p>

                    </div>
                    <div className="card_link_container">
                        <Link to="/daftar" className="card_link">Berlangganan</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
