import React from "react";
import styled from "./createArtist.module.scss";
import img from "../../images/form/image-placeholder-85@1x.png";

function CreateArtist() {
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
      img: "avatar-placeholder-5@2x.png",
    },
    {
      img: "avatar-placeholder-128@2x.png",
    },
    {
      img: "avatar-placeholder-7@2x.png",
    },
  ];
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
        <form action="#" className={styled.form__body__main}>
          <div className={styled.form__body__main__up}>
            <div className={styled.form__body__main__up__name}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styled.form__body__main__up__change}>
              <input type="text" placeholder="Change" />
            </div>
            <div className={styled.form__body__main__up__sold}>
              <input type="text" placeholder="Sold" />
            </div>
            <div className={styled.form__body__main__up__volume}>
              <input type="text" placeholder="Volume" />
            </div>
            <div className={styled.form__body__main__up__select}>
              <select name="img" id="img">
                <option value="" selected>
                  Select image
                </option>
                {imgs.map((img, index) => (
                  <option value={img.img}>{index + 1}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className={styled.form__body__main__down}>
            <div>Create Artist</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArtist;
