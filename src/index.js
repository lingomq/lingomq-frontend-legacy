import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/app/app.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOMClient.createRoot(document.querySelector("#root"))
    .render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );