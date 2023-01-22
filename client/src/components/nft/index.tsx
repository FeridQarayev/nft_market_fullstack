import "./nft.scss";
interface INFT {
  _id: string;
  name: string;
  price: number;
  highest: number;
  imgUrl: string;
  artist: {
    _id: string;
    name: string;
    change: number;
    sold: number;
    volume: number;
    imgUrl: string;
    createTime: Date;
  };
}

function NFT(data: { nft: INFT }) {
  const { nft } = data;
  return (
    <div className="nft">
      <div className="nft__img">
        <img src={require(`../../images/nft/${nft.imgUrl}`)} alt={nft.name} />
      </div>
      <div className="nft__body">
        <div className="nft__body__artist">
          <div className="nft__body__artist__name">{nft.name}</div>
          <div className="nft__body__artist__avatar">
            <div className="nft__body__artist__avatar__img">
              <div>
                <img
                  src={require(`../../images/artist/${nft.artist.imgUrl}`)}
                  alt="Avatar Placeholder"
                />
              </div>
            </div>
            <div className="nft__body__artist__avatar__name">
              {nft.artist.name}
            </div>
          </div>
        </div>
        <div className="nft__body__info">
          <div className="nft__body__info__price">
            <div className="nft__body__info__price__text">Price</div>
            <div className="nft__body__info__price__price">{nft.price} ETH</div>
          </div>
          <div className="nft__body__info__highest">
            <div className="nft__body__info__highest__text">Highest Bid</div>
            <div className="nft__body__info__highest__price">
              {nft.highest} wETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
