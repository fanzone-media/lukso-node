require("dotenv").config();
const express = require("express");
const router = express.Router();
const Data = require("../models/data");

// Get all Data
router.get("/", async (req, res) => {
    try {
        let data = await Data.find();
        res.status(200).json(data); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Get Data by key
router.get("/:key", async (req, res) => {
    try {
        const data = await Data.findById(req.params.key) || {};
        res.status(200).json(data); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;