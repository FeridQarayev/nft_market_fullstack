import React from "react";
import nft_img from "../../images/nft/image-placeholder@2x.png";
import nft_img_avatar from "../../images/artist/avatar-placeholder-5@2x.png";
import "./nft.scss";

function NFT() {
  return (
    <div className="nft">
      <div className="nft__img">
        <img src={nft_img} alt="Image Placeholder" />
      </div>
      <div className="nft__body">
        <div className="nft__body__artist">
          <div className="nft__body__artist__name">Magic Mushroom 0325</div>
          <div className="nft__body__artist__avatar">
            <div className="nft__body__artist__avatar__img">
              <div>
                <img src={nft_img_avatar} alt="Avatar Placeholder" />
              </div>
            </div>
            <div className="nft__body__artist__avatar__name">Shroomie</div>
          </div>
        </div>
        <div className="nft__body__info">
          <div className="nft__body__info__price">
            <div className="nft__body__info__price__text">Price</div>
            <div className="nft__body__info__price__price">1.63 ETH</div>
          </div>
          <div className="nft__body__info__highest">
            <div className="nft__body__info__highest__text">Highest Bid</div>
            <div className="nft__body__info__highest__price">0.33 wETH</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
