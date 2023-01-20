import React from "react";
import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.headline}>
      <div className={style.headline__container}>
        <div className={style.headline__container__top}>
          <div className={style.headline__container__top__text}>
            Top Creators
          </div>
        </div>
        <div className={style.headline__container__down}>
          <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
