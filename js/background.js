var alreadyClicked = false;
  /*
    The active tab and sending the message with toggleStyle: true to the content script. We also check the response from the content script to determine if the style was applied or not. Based on that, we update the extension icon to reflect the active/inactive state.
  */
chrome.action.onClicked.addListener(async (tab) => {
    try {
        const [tabInfo] = await chrome.tabs.query({ active: true, currentWindow: true });
        const { id } = tabInfo;
        
        chrome.scripting.executeScript({
            target: { tabId: id },
            files: ['js/content.js']
        }, () => {
            chrome.tabs.sendMessage(id, { toggleStyle: true });
        });
    } catch (error) {
        console.error(error);
    }
});
