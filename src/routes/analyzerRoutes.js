const express = require("express");
const {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWords,
} = require("../controllers/analyzerController");

const router = express.Router();

router.get("/wordCount", getWordCount);
router.get("/characterCount", getCharacterCount);
router.get("/sentenceCount", getSentenceCount);
router.get("/paragraphCount", getParagraphCount);
router.get("/longestWords", getLongestWords);

module.exports = router;
