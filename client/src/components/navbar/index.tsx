import React from "react";
import logo_store from "../../images/navbar/storefront-2@2x.svg";
import logo_text from "../../images/navbar/nft-marketplace-1@2x.svg";
import logo_user from "../../images/navbar/user@2x.svg";
import { Link } from "react-router-dom";
import style from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__left}>
        <div className={style.navbar__left__logo}>
          <img
            className={style.navbar__left__logo__store}
            src={logo_store}
            alt="Storefront"
          />
          <img
            className={style.navbar__left__logo__text}
            src={logo_text}
            alt="NFT Marketplace"
          />
        </div>
      </div>
      <div className={style.navbar__right}>
        <Link className={style.navbar__right__link} to="">
          <div>Marketplace</div>
        </Link>
        <Link className={style.navbar__right__link} to="">
          <div>Rankings</div>
        </Link>
        <Link className={style.navbar__right__link} to="">
          <div>Connect a wallet</div>
        </Link>
        <Link className={style.navbar__right__btn} to="">
          <img src={logo_user} alt="User" />
          <div>Sign Up</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
