/*
  Function allows toggling between single-line and multi-line text display for the specified element, providing a convenient way to modify the formatting style based on the current state.
*/
function formatStyle() {
  var sprintGoalElement = document.querySelector('.ghx-sprint-goal');

  if (!sprintGoalElement) {
    return { styleApplied: false };
  }

  var currentWhiteSpace = sprintGoalElement.style.whiteSpace;
  var newWhiteSpace = currentWhiteSpace === 'pre-line' ? 'normal' : 'pre-line';

  sprintGoalElement.style.whiteSpace = newWhiteSpace;

  return { styleApplied: newWhiteSpace === 'pre-line' };
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.toggleStyle) {
    const response = formatStyle();
    sendResponse(response);
  }
});

  