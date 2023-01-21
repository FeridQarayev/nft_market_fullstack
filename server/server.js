const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const app = express();

const PORT = 8080;

const NFTSchema = new mongoose.Schema({
  name: String,
  price: Number,
  highest: Number,
  artistName: String,
  artistImage: String,
});

const ArtistSchema = new mongoose.Schema({
  name: String,
  change: Number,
  sold: Number,
  volume: Number,
  imgUrl: String,
  nfts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }]
});

const NFTModel = mongoose.model("NFT", NFTSchema);
const ArtistModel = mongoose.model("Artist", ArtistSchema);



app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
