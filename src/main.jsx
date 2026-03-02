import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Semaforo } from "./components/Semaforo.jsx";
import { Semaforo2 } from "./components/Semaforo2.jsx";
import "./App.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Semaforo></Semaforo> */}
    <Semaforo2></Semaforo2>
  </StrictMode>,
);
