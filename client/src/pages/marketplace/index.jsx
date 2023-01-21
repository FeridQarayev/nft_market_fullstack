import React, { Fragment } from "react";
import search_logo from "../../images/marketplace/magnifyingglass@2x.svg";
import line from "../../images/marketplace/line-2@1x.svg";
import styled from "./marketplace.module.scss";

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
                <div className={styled.nfts__head__container__body__left__count}>
                  <div>302</div>
                </div>
              </div>
              <div className={styled.nfts__head__container__body__right}>
                <div className={styled.nfts__head__container__body__right__text}>
                  Collections
                </div>
                <div className={styled.nfts__head__container__body__right__count}>
                  <div>67</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nfts__body"></div>
      </div>
      {/* Nfts End */}
    </Fragment>
  );
}

export default Marketplace;
