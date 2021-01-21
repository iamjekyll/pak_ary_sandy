import React from "react";

const Card = (props) => {
  const { name, price1, price2, img } = props;
  return (
    <div className="pro__ctn">
      <div className="pro__bx">
        <img src={img} alt={name} />
        <h3>PAKET {name}</h3>
        <div className="pro_ptp">
          <p>6 Bulan</p>
          <p className="pro__harga">Rp {price1}</p>
        </div>
        <div className="pro_pbt">
          <p>12 Bulan</p>
          <p className="pro__harga">Rp {price2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
