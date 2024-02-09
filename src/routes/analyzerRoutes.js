const express = require("express");
const {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
} = require("../controllers/analyzerController");

const router = express.Router();

router.get("/wordCount", getWordCount);
router.get("/characterCount", getCharacterCount);
router.get("/sentenceCount", getSentenceCount);

module.exports = router;
