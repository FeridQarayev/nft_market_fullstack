import React from "react";
import "./artist.scss";

function Artist() {
  return (
    <div className="artist">
      <div className="artist__body">
        <div className="artist__body__left">
          <div className="artist__body__left__number">
            <div>1</div>
          </div>
          <div className="artist__body__left__card">
            <div className="artist__body__left__card__img">
              <div>
                <div>
                  <img
                    className="
                      artist__body__left__card__img__avatar
                    "
                    src={require("../../images/artist/avatar-placeholder-5@2x.png")}
                    alt="Avatar Placeholder"
                  />
                </div>
              </div>
            </div>
            <div className="artist__body__left__card__name">
              <div className="artist__body__left__card__name__text">
                Jaydon Ekstrom Bothman
              </div>
            </div>
          </div>
        </div>
        <div className="artist__body__right">
          <div className="artist__body__right__item">
            <div className="artist__body__right__item__change">+1.41%</div>
          </div>
          <div className="artist__body__right__item">
            <div className="artist__body__right__item__sold">602</div>
          </div>
          <div className="artist__body__right__item">
            <div className="artist__body__right__item__volume">12.4 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
