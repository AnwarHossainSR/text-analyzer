const { analyzeText } = require("../services/textAnalyzerService");

const getWordCount = (req, res) => {
  const wordCount = analyzeText("words");
  res.json({ wordCount });
};

const getCharacterCount = (req, res) => {
  const characterCount = analyzeText("characters");
  res.json({ characterCount });
};

const getSentenceCount = (req, res) => {
  const sentenceCount = analyzeText("sentences");
  res.json({ sentenceCount });
};

const getParagraphCount = (req, res) => {
  const paragraphCount = analyzeText('paragraphs');
  res.json({ paragraphCount });
};

module.exports = {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount
};
