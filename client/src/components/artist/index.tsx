import { Modal, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
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

const validationSchema = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  highest: Yup.number().required(),
});
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
          <Formik
            initialValues={{
              name: "",
              price: "",
              highest: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log({ ...values, imgUrl: artist.imgUrl });
              axios
                .post("http://localhost:8080/api/artists", {
                  ...values,
                  createTime: new Date(),
                })
                .then((res) => {
                  // if (res.status === 201) toast.success(res.data.message);
                  // else toast.error(res.data.message);
                  console.log(res.data);
                })
                // .catch((res) => toast.error(res.data.message));
              // resetForm();
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form action="#" className="nftform" onSubmit={handleSubmit}>
                <div className="nftform__row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.name && errors.name}</p>
                <div className="nftform__row">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    value={values.price}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.price && errors.price}</p>
                <div className="nftform__row">
                  <input
                    type="number"
                    name="highest"
                    placeholder="Highest"
                    onChange={handleChange}
                    value={values.highest}
                  />
                </div>
                <p style={{ color: "red" }}>
                  {errors.highest && errors.highest}
                </p>
                <div className="nftform__btn">
                  <button type="submit">Create</button>
                </div>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default Artist;
