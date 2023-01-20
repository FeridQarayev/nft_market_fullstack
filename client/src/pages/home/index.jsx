import React, { Fragment } from "react";
import style from "./home.module.scss";
import artist1 from "../../images/artist/avatar-placeholder-5@2x.png";

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
        <div className={style.table__artist}>
          <div className={style.table__artist__body}>
            <div className={style.table__artist__body__left}>
              <div className={style.table__artist__body__left__number}>
                <div>1</div>
              </div>
              <div className={style.table__artist__body__left__card}>
                <div className={style.table__artist__body__left__card__img}>
                  <div>
                    <div>
                    <img
                      className={
                        style.table__artist__body__left__card__img__avatar
                      }
                      src={artist1}
                      alt="Avatar Placeholder"
                    />
                    </div>
                  </div>
                </div>
                <div className={style.table__artist__body__left__card__name}>
                  <div
                    className={
                      style.table__artist__body__left__card__name__text
                    }
                  >
                    Jaydon Ekstrom Bothman
                  </div>
                </div>
              </div>
            </div>
            <div className={style.table__artist__body__right}>
              <div className={style.table__artist__body__right__item}>
                <div className={style.table__artist__body__right__item__change}>
                  +1.41%
                </div>
              </div>
              <div className={style.table__artist__body__right__item}>
                <div className={style.table__artist__body__right__item__sold}>
                  602
                </div>
              </div>
              <div className={style.table__artist__body__right__item}>
                <div className={style.table__artist__body__right__item__volume}>
                  12.4 ETH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}
    </Fragment>
  );
}

export default Home;
