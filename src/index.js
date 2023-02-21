import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppProvider from "./components/App";
import { store } from "./store.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <AppProvider />
    {/* </StrictMode> */}
  </Provider>
);
