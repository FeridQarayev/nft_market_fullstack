import React from "react";
import styled from "./createArtist.module.scss";
import img from "../../images/form/image-placeholder-85@1x.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import { createArtist } from "../../service/createArtist";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  change: Yup.number().required(),
  sold: Yup.number().required(),
  volume: Yup.number().required(),
  imgUrl: Yup.string().required(),
});
const imgs = [
  {
    img: "avatar-placeholder-5@2x.png",
  },
  {
    img: "avatar-placeholder-6@2x.png",
  },
  {
    img: "avatar-placeholder-7@2x.png",
  },
  {
    img: "avatar-placeholder-8@2x.png",
  },
  {
    img: "avatar-placeholder-9@2x.png",
  },
  {
    img: "avatar-placeholder-16@2x.png",
  },
  {
    img: "avatar-placeholder-17@2x.png",
  },
  {
    img: "avatar-placeholder-126@2x.png",
  },
  {
    img: "avatar-placeholder-127@2x.png",
  },
  {
    img: "avatar-placeholder-128@2x.png",
  },
  {
    img: "avatar-placeholder-129@2x.png",
  },
  {
    img: "avatar-placeholder-130@2x.png",
  },
  {
    img: "avatar-placeholder-131@2x.png",
  },
  {
    img: "avatar-placeholder-132@2x.png",
  },
  {
    img: "avatar-placeholder-133@2x.png",
  },
  {
    img: "avatar-placeholder-134@2x.png",
  },
  {
    img: "avatar-placeholder-135@2x.png",
  },
  {
    img: "avatar-placeholder-120@2x.png",
  },
  {
    img: "avatar-placeholder-121@2x.png",
  },
  {
    img: "avatar-placeholder-72@2x.png",
  },
];

function CreateArtist() {
  return (
    <div className={styled.form}>
      <img src={img} alt="logo" />
      <div className={styled.form__body}>
        <div className={styled.form__body__title}>
          <div className={styled.form__body__title__container}>
            <div className={styled.form__body__title__container__up}>
              <div>Create Artist</div>
            </div>
            <div className={styled.form__body__title__container__down}>
              <p>
                Welcome! Enter Your Details And Start Creating, Collecting And
                Selling Nfts.
              </p>
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            name: "",
            change: "",
            sold: "",
            volume: "",
            imgUrl: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            createArtist({ ...values, createTime: new Date() })
              .then((res) => {
                if (res.status === 201) toast.success(res.data.message);
                else toast.error(res.data.message);
              })
              .catch((res) => toast.error(res.data.message));
            resetForm();
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <form
              action="#"
              className={styled.form__body__main}
              onSubmit={handleSubmit}
            >
              <div className={styled.form__body__main__up}>
                <div className={styled.form__body__main__up__name}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.name && errors.name}</p>
                <div className={styled.form__body__main__up__change}>
                  <input
                    type="number"
                    name="change"
                    placeholder="Change"
                    onChange={handleChange}
                    value={values.change}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.change && errors.change}</p>
                <div className={styled.form__body__main__up__sold}>
                  <input
                    type="number"
                    name="sold"
                    placeholder="Sold"
                    onChange={handleChange}
                    value={values.sold}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.sold && errors.sold}</p>
                <div className={styled.form__body__main__up__volume}>
                  <input
                    type="number"
                    name="volume"
                    placeholder="Volume"
                    onChange={handleChange}
                    value={values.volume}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.volume && errors.volume}</p>
                <div className={styled.form__body__main__up__select}>
                  <select
                    name="imgUrl"
                    id="img"
                    onChange={handleChange}
                    value={values.imgUrl}
                  >
                    <option value="" defaultValue={""}>
                      Select image
                    </option>
                    {imgs.map((img, index) => (
                      <option key={index} value={img.img}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <p style={{ color: "red" }}>{errors.imgUrl && errors.imgUrl}</p>
              </div>
              <button type="submit" className={styled.form__body__main__down}>
                <div>Create Artist</div>
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CreateArtist;
