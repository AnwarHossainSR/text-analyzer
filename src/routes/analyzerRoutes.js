const express = require("express");
const { getWordCount } = require("../controllers/analyzerController");

const router = express.Router();

router.get("/wordCount", getWordCount);

module.exports = router;
