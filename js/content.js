// Control and accept only one click
var alreadyClicked = false;

function formatStyle(textElement) {
  if (!textElement) {
    return { styleApplied: false };
  }

  var currentWhiteSpace = textElement.parentElement.style.whiteSpace;
  var newWhiteSpace = currentWhiteSpace === "pre-line" ? "normal" : "pre-line";

  textElement.parentElement.style.whiteSpace = newWhiteSpace;

  return { styleApplied: newWhiteSpace === "pre-line" };
}

function findTextElementStartingWithOne() {
  // find the text element starting with 1.
  var textNodes = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  var foundTextElement = null;

  while (textNodes.nextNode()) {
    var textContent = textNodes.currentNode.textContent;

    // check if the text starts with 1. or 1)
    if (/^1[.)]/.test(textContent.trim())) {
      foundTextElement = textNodes.currentNode;
      break;
    }
  }

  return foundTextElement;
}

function handleClick() {
  if (alreadyClicked) {
    return;
  }

  alreadyClicked = true;
  const textElement = findTextElementStartingWithOne();
  const response = formatStyle(textElement);

  if (response.styleApplied) {
    console.log("Style applied.");
  } else {
    console.log("Element not found or style not applied.");
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.toggleStyle) {
    handleClick();
  }
});
