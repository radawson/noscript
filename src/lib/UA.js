var UA = {
  isMozilla: document.URL.startsWith("moz-"),
}

if (!UA.isMozilla) {
  if (typeof chrome === "object" && !chrome.tabs && typeof exportFunction === "undefined") {
    // content script shims
    window.exportFunction = () => {};
  }
} else {
  document.documentElement.classList.add("mozwebext");
}
