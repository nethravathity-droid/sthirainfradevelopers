import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Router (IMPORTANT)
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

<div className="relative overflow-hidden">
  {/* Background curves */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C9A646" stopOpacity="0" />
        <stop offset="50%" stopColor="#C9A646" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#C9A646" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M0,200 Q400,100 800,200 T1600,200"
      stroke="url(#goldLine)"
      strokeWidth="2"
      fill="none"
      className="animate-pulse"
    />

    <path
      d="M0,400 Q500,300 1000,400 T2000,400"
      stroke="url(#goldLine)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
  </svg>

  {/* Your content */}
  <div className="relative z-10">
    {/* rest of site */}
  </div>
</div>
reportWebVitals();