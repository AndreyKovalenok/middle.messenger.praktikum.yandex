const express = require("express");
const path = require("path");

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
