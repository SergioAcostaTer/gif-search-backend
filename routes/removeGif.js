const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/removeGif/:token", async (req, res) => {
  const { token } = req.params;
  const { gif } = req.body;

  const match = await userSchema.find({ token });

  match[0].gifs = match[0].gifs.filter((gifSaved) => gifSaved.id != gif.id);
  //   console.log(match[0].gifs);
  await match[0].save();
  console.log(match[0].gifs[0], gif);

  res.json(match[0]);
});

module.exports = router;
