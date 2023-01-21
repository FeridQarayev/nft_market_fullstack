const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const app = express();

const PORT = 8080;

const NFTSchema = new mongoose.Schema({
  name: String,
  price: Number,
  highest: Number,
  imgUrl: String,
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
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://ferid:PSZde9zf0vkXCbWc@cluster0.tnvvtt5.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

const nftValSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  highest: Joi.number().required(),
  imgUrl: Joi.string().required(),
  artistName: Joi.string().required(),
  artistImage: Joi.string().required(),
});

const artistValSchema = Joi.object({
  name: Joi.string().required(),
  change: Joi.number().required(),
  sold: Joi.number().required(),
  volume: Joi.number().required(),
  imgUrl: Joi.string().required(),
  createTime: Joi.date().required(),
});

// NFT Get Method
app.get("/api/nfts", async (req, res) => {
  let nfts = await NFTModel.find();
  res.send(nfts);
});

// NFT Post Method
app.post(
  "/api/nfts",
  (req, res, next) => {
    const { error } = nftValSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    const newNFT = new NFTModel({ ...req.body });
    await newNFT.save();
    res.status(201).send({ message: "Nft succesfully added!", nft: newNFT });
  }
);

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

// PSZde9zf0vkXCbWc
