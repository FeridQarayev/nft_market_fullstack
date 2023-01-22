import "./artist.scss";
interface IArtist {
  _id: number;
  name: string;
  change: number;
  sold: number;
  volume: number;
  imgUrl: string;
  createTime: Date;
}
function Artist(data: { artist: IArtist; index: number }) {
  const { artist, index } = data;
  return (
    <div className="artist">
      <div className="artist__body">
        <div className="artist__body__left">
          <div className="artist__body__left__number">
            <div style={index > 9 ? { left: "5px" } : {}}>{index}</div>
          </div>
          <div className="artist__body__left__card">
            <div className="artist__body__left__card__img">
              <div>
                <div>
                  <img
                    className="
                      artist__body__left__card__img__avatar
                    "
                    src={require(`../../images/artist/${artist.imgUrl}`)}
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
