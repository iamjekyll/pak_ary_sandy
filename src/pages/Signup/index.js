import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="signup__wrap">
          <div className="signup__wrctn">
            <h1>Makasih Ma, Pa</h1>
          </div>
      </div>
      <div className="signup__wrapper">
        <div className="signup__container">
          <h1>Daftar Transvision Sekarang.</h1>
          <form>
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap anda" />
            <label>Alamat Pemasangan</label>
            <input type="text" placeholder="Isi dengan alamat pemasangan" />
            <label>No HP</label>
            <input type="text" placeholder="08.." />
            <label>Email</label>
            <input type="text" placeholder="Masukkan alamat email anda" />
            <label>Pilihan Paket</label>
            <select>
              <option value="0">Pilih Paket :</option>
              <option value="1">Gold</option>
              <option value="2">Platinum</option>
              <option value="3">Diamond</option>
              <option value="4">Diamond+</option>
            </select>
            <input type="submit" name="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
