import { Modal, Typography, Box } from "@mui/material";
import React, { useState } from "react";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Artist(data: { artist: IArtist; index: number }) {
  const { artist, index } = data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="artist">
      <div onClick={handleOpen} className="artist__body">
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create NFT
          </Typography>
          <form action="#" className="nftform">
            <div className="nftform__row">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="nftform__row">
              <input type="text" name="price" placeholder="Price" />
            </div>
            <div className="nftform__row">
              <input type="text" name="highest" placeholder="Highest" />
            </div>
            <div className="nftform__row">
              <input type="text" name="imgUrl" placeholder="Image" />
            </div>
            <div className="nftform__btn">
              <button type="submit">Create</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Artist;
