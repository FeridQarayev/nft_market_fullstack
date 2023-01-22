import React, { Fragment } from "react";
import search_logo from "../../images/marketplace/magnifyingglass@2x.svg";
import line from "../../images/marketplace/line-2@1x.svg";
import styled from "./marketplace.module.scss";
import NFT from "../../components/nft";

const nfts = [
  {
    id: 1,
    name: "Magic Mushroom 0325",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder@2x.png",
    artist: {
      artistId: 7,
      name: "Shroomie",
      img: "avatar-placeholder-17@2x.png",
    },
  },
  {
    id: 2,
    name: "Happy Robot 032",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-65@2x.png",
    artist: {
      artistId: 12,
      name: "BeKind2Robots",
      img: "avatar-placeholder-130@2x.png",
    },
  },
  {
    id: 3,
    name: "Magic Mushroom 024",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-66@2x.png",
    artist: {
      artistId: 12,
      name: "BeKind2Robots",
      img: "avatar-placeholder-130@2x.png",
    },
  },
  {
    id: 4,
    name: "Designer Bear",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-1@2x.png",
    artist: {
      artistId: 6,
      name: "Mr Fox",
      img: "avatar-placeholder-16@2x.png",
    },
  },
  {
    id: 5,
    name: "Colorful Dog 0356",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-67@2x.png",
    artist: {
      artistId: 15,
      name: "Keepitreal",
      img: "avatar-placeholder-133@2x.png",
    },
  },
  {
    id: 6,
    name: "Dancing Robot 0312",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-68@2x.png",
    artist: {
      artistId: 8,
      name: "Robotica",
      img: "avatar-placeholder-126@2x.png",
    },
  },
  {
    id: 7,
    name: "Cherry Blossom Girl 035",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-69@2x.png",
    artist: {
      artistId: 16,
      name: "MoonDancer",
      img: "avatar-placeholder-134@2x.png",
    },
  },
  {
    id: 8,
    name: "Space Travel",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-70@2x.png",
    artist: {
      artistId: 10,
      name: "NebulaKid",
      img: "avatar-placeholder-128@2x.png",
    },
  },
  {
    id: 9,
    name: "Sunset Dimension",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-2@2x.png",
    artist: {
      artistId: 14,
      name: "Animakid",
      img: "avatar-placeholder-132@2x.png",
    },
  },
  {
    id: 10,
    name: "Desert Walk",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-71@2x.png",
    artist: {
      artistId: 21,
      name: "Catch 22",
      img: "avatar-placeholder-120@2x.png",
    },
  },
  {
    id: 11,
    name: "Icecream Ape 0324",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-72@2x.png",
    artist: {
      artistId: 22,
      name: "Ice Ape Club",
      img: "avatar-placeholder-121@2x.png",
    },
  },
  {
    id: 12,
    name: "Colorful Dog 0344",
    price: 1.63,
    highest: 0.33,
    img: "image-placeholder-73@2x.png",
    artist: {
      artistId: 23,
      name: "PuppyPower",
      img: "avatar-placeholder-72@2x.png",
    },
  },
];
function Marketplace() {
  return (
    <Fragment>
      {/* Headline Start */}
      <div className={styled.headline}>
        <div className={styled.headline__container}>
          <div className={styled.headline__container__up}>
            <div>Browse Marketplace</div>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className={styled.headline__container__down}>
            <div className={styled.headline__container__down__search}>
              <div className={styled.headline__container__down__search__text}>
                <input type="text" placeholder="Search your favourite NFTs" />
              </div>
              <img src={search_logo} alt="icon-search" />
            </div>
          </div>
        </div>
      </div>
      {/* Headline End */}

      {/* Nfts Start */}
      <div className={styled.nfts}>
        <div className={styled.nfts__head}>
          <img src={line} alt="Line" />
          <div className={styled.nfts__head__container}>
            <div className={styled.nfts__head__container__body}>
              <div className={styled.nfts__head__container__body__left}>
                <div className={styled.nfts__head__container__body__left__text}>
                  Nfts
                </div>
                <div
                  className={styled.nfts__head__container__body__left__count}
                >
                  <div>302</div>
                </div>
              </div>
              <div className={styled.nfts__head__container__body__right}>
                <div
                  className={styled.nfts__head__container__body__right__text}
                >
                  Collections
                </div>
                <div
                  className={styled.nfts__head__container__body__right__count}
                >
                  <div>67</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.nfts__body}>
          <div className={styled.nfts__body__row}>
            {nfts.map((nft) => (
              <NFT key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </div>
      {/* Nfts End */}
    </Fragment>
  );
}

export default Marketplace;
