

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg);
  if (msg.btnTxt == 'hello!') {
    sendResponse('Yeah!')
  } else if (msg.btnTxt == 'good!') {
    sendResponse('thank you!')
  }
  sendResponse('まさかのif文がおかしかった？？');
  let dEatDay = new Date(msg.btnTxt);  

  function countdown(due) {
    const now = new Date();
    var diff = due.getTime() - now.getTime();
    var sec = Math.floor(diff / 1000 % 60);
    var min = Math.floor(diff / 1000 / 60) % 60;
    var hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    var count = [days, hours, min, sec];
    console.log(`残り；${count[0]}日${count[1]}時間${count[2]}分${count[3]}秒`);
  }
  countdown(dEatDay);
})
