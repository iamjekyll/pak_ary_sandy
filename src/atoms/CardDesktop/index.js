import React from 'react'
import './CardDesktop.css'

const CardDesktop = (props) => {
    const {img, harga, nama, detail} = props;
    return (
        <div className="cd_wrap">
            <div className="cd_container">
                <img className="cd_image" src={img} alt={nama} />
                <p className="text_block">Mulai dari {harga}</p>
                <h3>{nama}</h3>
                <p className="text_block">{detail}</p>
                <button>Cek Paket</button>
            </div>
        </div>
    )
}

export default CardDesktop
