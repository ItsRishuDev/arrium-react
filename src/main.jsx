import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Fragment>
);
