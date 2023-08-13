const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const apiKey = process.env.API_KEY;

router.get("/weather", async (req, res) => {
  //Extract city name from request
  // const city = req.query.city;
  const city = `cochin`;
  try {
    //Get weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5`;
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };
    const response = await axios.get(url, { headers });
    const weatherData = response.data;

    //Send weather data as JSON
    res.json(weatherData);
  } catch (error) {
    //Error
    console.error("Error sending weather data", error);
    res.status(500).json({ error: `Unable to send weather data: ${error}` });
  }
});

module.exports = router;
