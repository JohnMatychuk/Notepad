const notepad = document.getElementById("notepad");

chrome.storage.sync.get("text", function (data) {
  if (data.text) {
    notepad.value = data.text;
  }
});

notepad.addEventListener("input", function () {
  chrome.storage.sync.set({ text: notepad.value });
});
