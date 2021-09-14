require("dotenv").config();

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
        default: "0x"
    },
}, { versionKey: false });

module.exports = mongoose.model("Data", dataSchema);