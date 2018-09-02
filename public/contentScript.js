var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
      return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
      console.log("Content script received message: " + event.data.text);
      chrome.runtime.sendMessage({message: event.data.message}, function(response) {
          console.log('Message sent from contentScript to chrome extension');
          console.log('response: ' + response.response);
      });
  }
});

/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? "from content script: " + sender.tab.url : "from the extension");
    sendResponse({message: 'Message received by content script: ' + request.message});
  });
  */