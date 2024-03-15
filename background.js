chrome.commands.onCommand.addListener(function(command) {
  if (command === "openNewTab") {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      function onlyNumbers(str) {
        return /^\d+$/.test(str);
      }
      if (tabs && tabs.length > 0) {
        var currentUrl = tabs[0].url;
        var eventCode = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        if (currentUrl.includes("unibet") && onlyNumbers(eventCode)) {
          var newUrl = "https://www.betcity.nl/sportsbook#event/" + eventCode;
          chrome.tabs.create({ url: newUrl, active: false });
        } else if (currentUrl.includes("betcity") && onlyNumbers(eventCode)){
          var newUrl = "https://www.unibet.nl/betting/sports/event/" + eventCode;
          chrome.tabs.create({ url: newUrl, active: false });
      }
    }
    });
  }
});