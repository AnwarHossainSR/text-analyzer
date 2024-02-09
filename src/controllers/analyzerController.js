const { analyzeText } = require("../services/textAnalyzerService");

const getWordCount = (req, res) => {
  const wordCount = analyzeText("words");
  res.json({ wordCount });
};

module.exports = {
  getWordCount,
};
