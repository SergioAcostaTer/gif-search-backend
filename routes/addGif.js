const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.post("/addGif/:token", async (req, res) => {
  const { token } = req.params;
  const {gif} = req.body;

  const match = await userSchema.find({ token });
//   console.log(match[0])

  match[0].gifs.unshift(gif);

  await match[0].save();

  // console.log(match[0])

  // console.log(gif, token)

  res.json(match[0]);
});

module.exports = router;
