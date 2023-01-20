import React from "react";
import "./artist.scss";
interface IArtist {
  id: number;
  name: string;
  change: number;
  sold: number;
  volume: number;
  img: string;
}
function Artist(data: { artist: IArtist }) {
  const { artist } = data;
  return (
    <div className="artist">
      <div className="artist__body">
        <div className="artist__body__left">
          <div className="artist__body__left__number">
            <div style={artist.id > 9 ? { left: "5px" } : {}}>{artist.id}</div>
          </div>
          <div className="artist__body__left__card">
            <div className="artist__body__left__card__img">
              <div>
                <div>
                  <img
                    className="
                      artist__body__left__card__img__avatar
                    "
                    src={require(`../../images/artist/${artist.img}`)}
                    alt="Avatar Placeholder"
                  />
                </div>
              </div>
            </div>
            <div className="artist__body__left__card__name">
              <div className="artist__body__left__card__name__text">
                {artist.name}
              </div>
            </div>
          </div>
        </div>
        <div className="artist__body__right">
          <div className="artist__body__right__item change">
            <div className="artist__body__right__item__change">
              +{artist.change}%
            </div>
          </div>
          <div className="artist__body__right__item sold">
            <div className="artist__body__right__item__sold">{artist.sold}</div>
          </div>
          <div className="artist__body__right__item volume">
            <div className="artist__body__right__item__volume">
              {artist.volume} ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
