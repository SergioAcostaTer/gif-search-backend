const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.get("/checkFavourite/:token/:id", async (req, res) => {
  const { token, id } = req.params;
  let exist = false;

  const match = await userSchema.find({ token });

  match[0].gifs.map((e) => {
    if (e.id == id) {
      exist = true;
    }
  });

  res.json({exist});
});

module.exports = router;
