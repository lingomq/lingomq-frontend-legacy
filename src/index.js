import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/app/app.jsx";
ReactDOMClient.createRoot(document.querySelector("#root")).render(<App/>);