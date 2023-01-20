import React, { Fragment } from "react";
import style from "./home.module.scss";
import Artist from "../../components/artist";
// interface IArtist {
//   id: number;
//   name: string;
//   change: number;
//   sold: number;
//   volume: number;
//   img: string;
// }
function Home() {
  const artists = [
    {
      id: 1,
      name: "Jaydon Ekstrom Bothman",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-5@2x.png",
    },
    {
      id: 2,
      name: "Ruben Carder",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-6@2x.png",
    },
    {
      id: 3,
      name: "Alfredo Septimus",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-7@2x.png",
    },
    {
      id: 4,
      name: "Davis Franci",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-8@2x.png",
    },
    {
      id: 5,
      name: "Livia Rosser",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-9@2x.png",
    },
    {
      id: 6,
      name: "Kianna Donin",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-16@2x.png",
    },
    {
      id: 7,
      name: "Phillip Lipshutz",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-17@2x.png",
    },
    {
      id: 8,
      name: "Maria Rosser",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-126@2x.png",
    },
    {
      id: 9,
      name: "Kianna Stanton",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-127@2x.png",
    },
    {
      id: 10,
      name: "Angel Lubin",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-128@2x.png",
    },
    {
      id: 11,
      name: "Allison Torff",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-129@2x.png",
    },
    {
      id: 12,
      name: "Davis Workman",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-130@2x.png",
    },
    {
      id: 13,
      name: "Lindsey Lipshutz",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-131@2x.png",
    },
    {
      id: 14,
      name: "Randy Carder",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-132@2x.png",
    },
    {
      id: 15,
      name: "Lydia Culhane",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-133@2x.png",
    },
    {
      id: 16,
      name: "Rayna Bator",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-134@2x.png",
    },
    {
      id: 17,
      name: "Jocelyn Westervelt",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-135@2x.png",
    },
    {
      id: 18,
      name: "Marilyn Torff",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-5@2x.png",
    },
    {
      id: 19,
      name: "Skylar Levin",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-128@2x.png",
    },
    {
      id: 20,
      name: "Terry Dorwart",
      change: 1.41,
      sold: 602,
      volume: 12.4,
      img: "avatar-placeholder-7@2x.png",
    },
  ];

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
        {artists.map((artist) => (
          <Artist key={artist.id} artist={artist} />
        ))}
      </div>
      {/* Table End */}
    </Fragment>
  );
}

export default Home;
