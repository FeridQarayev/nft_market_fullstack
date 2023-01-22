import React from "react";
import "./createArtist.module.scss";
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
    <div className="form">
      <img src={img} alt="Image Placeholder" />
      <div className="form__body">
        <div className="form__body__title">
          <div className="form__body__title__container">
            <div className="form__body__title__container__up">
              <div>Create Artist</div>
            </div>
            <div className="form__body__title__container__down">
              <p>
                Welcome! Enter Your Details And Start Creating, Collecting And
                Selling Nfts.
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="form__body__main">
          <div className="form__body__main__up">
            <div className="form__body__main__up__name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form__body__main__up__change">
              <input type="text" placeholder="Change" />
            </div>
            <div className="form__body__main__up__sold">
              <input type="text" placeholder="Sold" />
            </div>
            <div className="form__body__main__up__volume">
              <input type="text" placeholder="Volume" />
            </div>
            <div className="form__body__main__up__select">
              <select name="img" id="img" placeholder="Select image">
                {imgs.map((img) => (
                  <option value="">
                    <img
                      src={require(`../../images/artist/${img.img}`)}
                      alt={img.img}
                    />
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form__body__main__down"></div>
        </form>
      </div>
    </div>
  );
}

export default CreateArtist;
