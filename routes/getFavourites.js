const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.get("/getFavourites/:token", async (req, res) => {
  const { token } = req.params;

  const match = await userSchema.find({ token });

  res.json(match[0].gifs);
});

module.exports = router;
