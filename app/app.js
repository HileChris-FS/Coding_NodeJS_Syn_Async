const express = require("express");
const requests = require("../requests");
const app = express();

app.use(requests)
module.exports = app;