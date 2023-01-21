import React, { Fragment } from "react";
import search_logo from "../../images/marketplace/magnifyingglass@2x.svg";
import styled from "./marketplace.module.scss";

function Marketplace() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Marketplace;
