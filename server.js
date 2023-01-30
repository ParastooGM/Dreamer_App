const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

const app = express();
app.use(express.json());

const db = config.get("mongoURI");

mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("served started"));