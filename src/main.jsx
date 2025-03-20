import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import App from "./App.jsx";
import "modern-normalize";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
