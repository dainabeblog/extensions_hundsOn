$("#black").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "black"
    });
  });

  chrome.runtime.sendMessage({ btnTxt: $("#date").val() }, function(response) {
    console.log(response)
  })

});

$("#red").on("click", () => {
  //送れない！！
  // chrome.runtime.sendMessage({ color: "red" });

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "red"
    });
  });
});

setInterval(countdown, 1000);
function countdown() {
  chrome.runtime.sendMessage({ btnTxt: $("#date").val() }, function(response) {
    console.log(response)
  })
}




