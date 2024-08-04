const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");

//middleware
app.use(express.json()); //parse application/json
app.use(express.urlencoded({ extended: false })); //parse application/x-www-form-urlencoded

//routes
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  //start the server
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello Tileni's World! from Express");
});

//connect to database

mongoose
  .connect(
    "mongodb+srv://tileni:XHfiPPNAEiugr6i9@databaseapi.lbhccd2.mongodb.net/api?retryWrites=true&w=majority&appName=DatabaseAPI"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
