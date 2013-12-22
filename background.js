
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({
    code: 'document.body.innerHTML = document.body.innerHTML.replace(/広島/g, "すごい広島")'
  });

});
