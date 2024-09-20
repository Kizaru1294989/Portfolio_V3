import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createRoot } from 'react-dom/client'
import App from "./App";
import reportWebVitals from "../reportWebVitals";
import WaveParticlesScene from "./components/Particules/wave-particules";

// ReactDOM.render(
//   <React.StrictMode>
//           <span className="tags bottom-tags">
//           <div id="stars"></div>
//           <div id="stars2"></div>
//           <div id="stars3"></div>
//           <div id="rocket"></div>
//           <div id="rocket2"></div>
//           <div id="rocket3"></div>
         
//         </span>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
