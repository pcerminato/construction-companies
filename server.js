const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const data = require("./static/companies-data.json");

const app = express();

const PORT = process.env.PORT ?? 3001;
const ROOT_PATH = process.env.ROOT_PATH ?? "";

app.use(cors());

app.use(`${ROOT_PATH}/`, express.static(path.join(__dirname, "build")));

app.get("/_health", (_req, res) => {
  return res.json({
    status: "OK",
  });
});

app.get("/api/specialties/all", (req, res) => {
  res.json(["Building", "Electrical", "Excavation", "Plumbing"]);
});

app.get("/api/companies/all", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! That's all we know :(");
});
