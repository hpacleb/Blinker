chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#000000'}, function() {
    console.log("Extension has started");
  });
});