const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");

app.use("/api", mainRoutes);

module.exports = app;