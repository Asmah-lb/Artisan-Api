const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config({ path: "./config.env" });

const adminRouter = require("./routes/adminRoute");
const profileRouter = require("./routes/profileRoute");


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const databaseUrl = process.env.DB_STRING;
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  console.log("I am fetching...");
  next();
});

//MOUNTING ROUTE //

app.use("/api/admin", adminRouter);
app.use("/api/profiles", profileRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

mongoose
  .connect(databaseUrl)
  .then(function (con) {
    console.log("Database connected successfully....");
  })
  .catch(function (error) {
    console.log(error.message);
  });

//===========================//
app.listen(port, function () {
  console.log(`App is listening on a port ${port}`);
});


//Pug0gX1nPs7zWRCL
