import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { UserProvider } from "./utilities/UserProvider";
import reducer, { initialState } from "./utilities/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={reducer}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
