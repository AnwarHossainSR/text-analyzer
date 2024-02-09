import fs from "fs";

const analyzeText = (metric) => {
  const text = fs.readFileSync("./data/sample.txt", "utf-8");
  const paragraphs = text.split("\n\n").filter(Boolean);

  switch (metric) {
    case "words":
      return text.split(/\s+/).length;
    case "characters":
      return text.length;
    case "sentences":
      return text.split(/[.!?]/).length - 1;
    case "paragraphs":
      return paragraphs.length;
    case "longestWords":
      return paragraphs.map((paragraph) => {
        const words = paragraph.split(/\s+/);
        const longestWord = words.reduce((longest, current) =>
          current.length > longest.length ? current : longest
        );
        return longestWord;
      });
    default:
      return null;
  }
};

export { analyzeText };
