import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import AppProvider from "./components/App";
import reducers from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

root.render(
  <Provider store={store}>
    <StrictMode>
      <AppProvider />
    </StrictMode>
  </Provider>
);
