// const path = require("path");

// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require('cors');

// dotenv.config({ path: "./config.env" });

// const adminRouter = require("./routes/adminRoute");
// const profileRouter = require("./routes/profileRoute");


// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

// const databaseUrl = process.env.DB_STRING;
// const port = process.env.PORT || 3000;

// app.use(function (req, res, next) {
//   console.log("I am fetching...");
//   next();
// });

// //MOUNTING ROUTE //

// app.use("/api/admin", adminRouter);
// app.use("/api/profiles", profileRouter);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// })

// mongoose
//   .connect(databaseUrl)
//   .then(function (con) {
//     console.log("Database connected successfully....");
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// //===========================//
// app.listen(port, function () {
//   console.log(`App is listening on a port ${port}`);
// });


// //Pug0gX1nPs7zWRCL




const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const adminRouter = require("./routes/adminRoute");
const profileRouter = require("./routes/profileRoute");

const app = express();

app.use(express.json());
app.use(cors());

// Serve static frontend files (for production)
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "client", "dist"))); // Adjust for "build" if using CRA

const databaseUrl = process.env.DB_STRING;
const port = process.env.PORT || 3000;

// API routes
app.use("/api/admin", adminRouter);
app.use("/api/profiles", profileRouter);

// Catch-all route for React frontend
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html")); // Adjust for "build" if using CRA
});

mongoose
  .connect(databaseUrl)
  .then(() => console.log("Database connected successfully...."))
  .catch((error) => console.log(error.message));

app.listen(port, () => console.log(`App is running on port ${port}`));
