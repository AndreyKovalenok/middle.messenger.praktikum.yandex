const express = require('express')
const path = require('path');

const PORT = 3000

const app = express()

app.use(express.static('./dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 