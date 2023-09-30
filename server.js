const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
app.use("/css", express.static(__dirname + "/css"));
app.use("/", express.static(__dirname + "/"));
app.get("/index.html", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});
app.get("/index.html", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});
app.get("/economy.html", (req, res) => {
  res.sendFile("economy.html", { root: path.join(__dirname) });
});
app.get("/entertainment.html", (req, res) => {
  res.sendFile("entertainment.html", { root: path.join(__dirname) });
});
app.get("/sports.html", (req, res) => {
  res.sendFile("sports.html", { root: path.join(__dirname) });
});
app.get("/weather.html", (req, res) => {
  res.sendFile("weather.html", { root: path.join(__dirname) });
});
app.get("/top_headlines.html", (req, res) => {
  res.sendFile("top_headlines.html", { root: path.join(__dirname) });
});
app.get("/api", async (req, res) => {
  //   res.sendFile("index.html", { root: path.join(__dirname) });
  console.log(req._parsedUrl.query);
  let url = `https://newsapi.org/v2/everything?` + req._parsedUrl.query;
  let r = await axios.get(url);
  let a = r.data;
  res.json(a);
});
app.listen(port, () => {
  console.log("running");
});
