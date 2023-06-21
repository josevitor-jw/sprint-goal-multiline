# Summary

This code snippet demonstrates how to create a Chrome extension that allows toggling the style of a specific element on a webpage. Clicking the extension icon applies a formatting style to the target element, and clicking again reverts the style. The extension uses a content script to interact with the webpage and a background script to handle the extension's logic.

## Files

*manifest.json*: Specifies the extension's name, version, description, icons, host permissions, and background script configuration.

*background.js*: Listens for the click event on the extension icon. It executes a content script on the active tab and sends a message to toggle the style. It also handles the response from the content script and updates the extension icon accordingly.

*content.js*: Contains the formatStyle function that toggles the formatting style of the target element on the webpage. It listens for the message from the background script to toggle the style and sends the response back.

### Usage

1. Clone or download the repository to your local machine.
2. Load the extension in Chrome by navigating to chrome://extensions.
3. Enable the *"Developer mode"* toggle.
4. Click on *"Load unpacked"* and select the folder containing the extension's files.
5. The extension will be installed and the icon will appear in the Chrome toolbar.
6. Clicking the icon will toggle the formatting style of the target element on the active webpage.

This code can serve as a starting point for creating Chrome extensions that manipulate webpage content based on user interactions.

Feel free to get in touch with me if you have any questions or suggestions
