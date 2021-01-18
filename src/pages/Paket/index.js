import React from "react";
import { Product } from "../../components";
import "./Paket.css";

const Paket = () => {
  return (
    <div className="pktdivwrap">
      <div className="paket__wraptop">
        <div className="paket__ctntop"></div>
      </div>
      <div className="paket__pilihan">
        <h1>Nonton asik bersama keluarga tercinta.</h1>
        <h2>Pilih Paketnya Yuk</h2>
      </div>
      <Product />
    </div>
  );
};

export default Paket;
