import React, { Fragment } from "react";
import style from "./home.module.scss";
import Artist from "../../components/artist";

function Home() {
  return (
    <Fragment>
      {/* Headline Satrt */}
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
      {/* Headline End */}

      {/* Frame Start */}
      <div className={style.frame}>
        <div className={style.frame__container}>
          <div className={style.frame__container__tab}>
            <div className={style.frame__container__tab__text}>Today</div>
          </div>
          <div className={style.frame__container__tabD}>
            <div className={style.frame__container__tabD__text}>This Week</div>
          </div>
          <div className={style.frame__container__tabD}>
            <div className={style.frame__container__tabD__text}>This Month</div>
          </div>
          <div className={style.frame__container__tabD}>
            <div className={style.frame__container__tabD__text}>All Time</div>
          </div>
        </div>
      </div>
      {/* Frame End */}

      {/* Table Start */}
      <div className={style.table}>
        <div className={style.table__header}>
          <div className={style.table__header__container}>
            <div className={style.table__header__container__left}>
              <div className={style.table__header__container__left__icon}>
                #
              </div>
              <div className={style.table__header__container__left__text}>
                Artist
              </div>
            </div>
            <div className={style.table__header__container__right}>
              <div className={style.table__header__container__right__item}>
                <div
                  className={style.table__header__container__right__item__text}
                >
                  Change
                </div>
              </div>
              <div className={style.table__header__container__right__item}>
                <div
                  className={style.table__header__container__right__item__text}
                >
                  NFTs Sold
                </div>
              </div>
              <div className={style.table__header__container__right__item}>
                <div
                  className={style.table__header__container__right__item__text}
                >
                  Volume
                </div>
              </div>
            </div>
          </div>
        </div>
        <Artist />
      </div>
      {/* Table End */}
    </Fragment>
  );
}

export default Home;
