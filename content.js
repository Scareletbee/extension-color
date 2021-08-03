chrome.runtime.onMessage.addListener(function (request) {
  changeColor(request);
});

function changeColor(request) {
  document.body.style.color = request;
}
