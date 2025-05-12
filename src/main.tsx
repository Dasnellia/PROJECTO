import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Registro from "./pages/Registro"
import Login from "./pages/Login"
import PaginaInicio from "./pages/PaginaInicio"

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el HTML.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename='/GameVerse'> 
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PaginaInicio" element={<PaginaInicio />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
