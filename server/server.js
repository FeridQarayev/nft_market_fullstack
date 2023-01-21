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
  createTime: Date,
  nfts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NFT",
    },
  ],
});

const NFTModel = mongoose.model("NFT", NFTSchema);
const ArtistModel = mongoose.model("Artist", ArtistSchema);

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://ferid:PSZde9zf0vkXCbWc@cluster0.tnvvtt5.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

// PSZde9zf0vkXCbWc
