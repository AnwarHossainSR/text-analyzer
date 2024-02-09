const { analyzeText } = require("../services/textAnalyzerService");

const getWordCount = (req, res) => {
  const wordCount = analyzeText("words");
  res.json({ wordCount });
};

const getCharacterCount = (req, res) => {
  const characterCount = analyzeText('characters');
  res.json({ characterCount });
};

module.exports = {
  getWordCount,getCharacterCount
};
