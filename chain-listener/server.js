require("dotenv").config();
require("./events");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

//db.dropDatabase(console.log(`Dropped Database`)); // Uncomment to Drop DB on reload
db.once("open", () => console.log("Connected to Database"));
db.on("error", error => console.error(error));

//app.use(cors());
app.use(express.json());

const datasRouter = require("./routes/datas");
app.use("/data", datasRouter);

app.listen(process.env.PORT, () => {
    console.log("Server Started");
});