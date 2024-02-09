const express = require("express");
const {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
} = require("../controllers/analyzerController");

const router = express.Router();

router.get("/wordCount", getWordCount);
router.get("/characterCount", getCharacterCount);
router.get("/sentenceCount", getSentenceCount);
router.get("/paragraphCount", getParagraphCount);

module.exports = router;
