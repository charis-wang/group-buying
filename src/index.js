import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppProvider from "./components/App";
import { store, persistor } from "./store.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <StrictMode> */}
      <AppProvider />
      {/* </StrictMode> */}
    </PersistGate>
  </Provider>
);
