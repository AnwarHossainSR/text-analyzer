const makeRequest = (endpoint, targetElement) => {
  $.get(`http://localhost:3000/analyze/${endpoint}`, (data) => {
    displayResponse(endpoint, data);
  });
};

const displayMainText = (text) => {
  $("#mainText").text(text);
};

const displayResponse = (endpoint, data) => {
  let message = "";
  switch (endpoint) {
    case "wordCount":
      message = `Number of words: ${data.wordCount}`;
      break;
    case "characterCount":
      message = `Number of characters: ${data.characterCount}`;
      break;
    case "sentenceCount":
      message = `Number of sentences: ${data.sentenceCount}`;
      break;
    case "paragraphCount":
      message = `Number of paragraphs: ${data.paragraphCount}`;
      break;
    case "longestWords":
      message = `Longest words: ${data.longestWords.join(", ")}`;
      break;
    default:
      message = "Invalid endpoint";
  }

  const resultElement = $(`#${endpoint}`);
  resultElement.html(`<strong>${message}</strong>`);
  resultElement.show();
};

const mainText =
  "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
displayMainText(mainText);

// Attach click event handlers to each button
$(document).ready(() => {
  $("#wordCountBtn").click(() => makeRequest("wordCount", "wordCount"));
  $("#characterCountBtn").click(() =>
    makeRequest("characterCount", "characterCount")
  );
  $("#sentenceCountBtn").click(() =>
    makeRequest("sentenceCount", "sentenceCount")
  );
  $("#paragraphCountBtn").click(() =>
    makeRequest("paragraphCount", "paragraphCount")
  );
  $("#longestWordsBtn").click(() =>
    makeRequest("longestWords", "longestWords")
  );
});
