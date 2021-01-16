import React from "react";
import {SallyAs, SallyTer} from '../../assets'
import "./Cta.css";

const Cta = () => {
  return (
    <div className="ct_wrp">
      <div className="ct_acct">
        <h2>Nikmati di TV-mu.</h2>
        <p>Bebas pilih acara TV terbaik.</p>
        <img
          src={SallyTer}
          alt="l"
        />
      </div>
      <div className="ct_acct">
        <h2>Film, acara TV tak terbatas, dan lebih banyak lagi.</h2>
        <p>Daftar sekarang. Pasang esok hari</p>
        <img
          src={SallyAs}
          alt="l"
        />
      </div>
    </div>
  );
};

export default Cta;