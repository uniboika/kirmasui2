import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import HomePage from "./pages/HomePage";


function App() {
  // removing server worker from the app
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();

        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(async (names) => {
            await Promise.all(names.map((name) => caches.delete(name)));
          });
        }
      });
    }
  }, []);

  return (
      <BrowserRouter>
        {/* <Toaster /> */}
        <ScrollToTop />
        <HomePage />
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
