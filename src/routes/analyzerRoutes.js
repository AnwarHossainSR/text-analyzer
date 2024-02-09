const express = require("express");
const {
  getWordCount,
  getCharacterCount,
} = require("../controllers/analyzerController");

const router = express.Router();

router.get("/wordCount", getWordCount);
router.get("/characterCount", getCharacterCount);

module.exports = router;
