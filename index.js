const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

//import routes
const handleLogin = require("./routes/handleLogin");
const addGif = require("./routes/addGif")
const removeGif = require("./routes/removeGif")
const getFavourites = require("./routes/getFavourites")
const checkFavourite = require("./routes/checkFavourite")



//seting port
const PORT = process.env.PORT || 4000;

//cors middleware
app.use(cors());
app.use(express.json());

//dotenv
require("dotenv").config();

//mongodb databse connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MONGODB"));

//routes
app.use("/", handleLogin);
app.use("/", addGif);
app.use("/", removeGif);
app.use("/", getFavourites);
app.use("/", checkFavourite);


//listening port
app.listen(PORT, console.log(`Server running on ${PORT}`));
