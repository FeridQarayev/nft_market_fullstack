import "./nft.scss";
interface INFT {
  id: number;
  name: string;
  price: number;
  highest: number;
  img: string;
  artist: {
    artistId: number;
    name: string;
    img: string;
  };
}

function NFT(data: { nft: INFT }) {
  const { nft } = data;
  return (
    <div className="nft">
      <div className="nft__img">
        <img src={require(`../../images/nft/${nft.img}`)} alt={nft.name} />
      </div>
      <div className="nft__body">
        <div className="nft__body__artist">
          <div className="nft__body__artist__name">{nft.name}</div>
          <div className="nft__body__artist__avatar">
            <div className="nft__body__artist__avatar__img">
              <div>
                <img
                  src={require(`../../images/artist/${nft.artist.img}`)}
                  alt="Avatar Placeholder"
                />
              </div>
            </div>
            <div className="nft__body__artist__avatar__name">Shroomie</div>
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
