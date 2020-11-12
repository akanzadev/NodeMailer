const express = require("express");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT || 3000, (e) => {
  if (e) throw new Error(e);
});