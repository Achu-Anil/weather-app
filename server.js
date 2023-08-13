const express = require("express");
const app = express();
const weatherRoute = require("./routes/weather");
require('dotenv').config();

const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use("/api",weatherRoute);