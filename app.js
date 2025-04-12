console.log("App is running!");

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("Service Worker registered!", reg))
      .catch(err => console.error("Service Worker failed", err));
  }
});