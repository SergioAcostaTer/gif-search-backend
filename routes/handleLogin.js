const express = require("express");
const userSchema = require("../models/userSchema");

const router = express.Router();

function generateUserToken(length = 64) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789";
  let result = "";

  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

router.post(
  "/handleLogin/:name/:email/:picture/:verified",
  async (req, res) => {
    const { name, email, picture, verified } = req.params;

    const match = await userSchema.find(
      {
        name: name,
        email: email,
        picture: picture,
        verified: verified,
      },
      "-_id -__v"
    );

    if (match[0]) {
      res.json(match[0]);
    }
    if (!match[0]) {
      const user = userSchema({
        name: name,
        email: email,
        picture: picture,
        verified: verified,
        token: generateUserToken(),
      });
      // console.log(user)
      user.save();
      res.json(user);
    }
  }
);

module.exports = router;
