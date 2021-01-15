import React from "react";
import { Header, Info, Product } from "../../components";
import "./Home.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Info />
      <Product />
      <div className="homepage__wrapper">
        <div className="homepage__container masthead">
          <div className="homepage__textcont">
            <h1>Satu platform terbaik untuk bisnis yang semakin berkembang.</h1>
            <p>
              Mulai fokus pada perkembangan bisnis Anda, Cumagini membantu Anda
              untuk otomasi Marketing anda secara online.
            </p>
            <button>Pelajari Tentang Cumagini</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
