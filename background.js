// chrome.tabs is chrome extension's Tab API, which allows us to retrieve info of each tab opened
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    // example: https://www.youtube.com/watch?v=0n809nd4Zu4&t=363s
    // queryParameters = v=0n809nd4Zu4&t=363s
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    // we are at the background.js, this background worker cannot access to the DOM,
    // it needs to communicate with contentScript.js via some messaging system
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      // ex: 0n809nd4Zu4&t=363s
      videoId: urlParameters.get("v"),
      // we can pass anything here, as long as we need
      // ex: random: "random"
    });
  }
})