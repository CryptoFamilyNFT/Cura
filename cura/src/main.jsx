import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<Root />);
