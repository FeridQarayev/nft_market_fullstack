import React from "react";
import logo_store from "../../images/navbar/storefront-2@2x.svg";
import logo_text from "../../images/navbar/nft-marketplace-1@2x.svg";
import logo_user from "../../images/navbar/user@2x.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img
            className="navbar__left__logo__store"
            src={logo_store}
            alt="Storefront"
          />
          <img
            className="navbar__left__logo__text"
            src={logo_text}
            alt="NFT Marketplace"
          />
        </div>
      </div>
      <div className="navbar__right">
        <Link to="">
          <div>Marketplace</div>
        </Link>
        <Link to="">
          <div>Rankings</div>
        </Link>
        <Link to="">
          <div>Connect a wallet</div>
        </Link>
        <Link to="">
          <img src={logo_user} alt="User" />
          <div>Sign Up</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
