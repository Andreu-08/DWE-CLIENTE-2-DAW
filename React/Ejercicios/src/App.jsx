import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import E1HolaMundo from "./ejercicios/e1-hola-mundo";
import E2Contador from "./ejercicios/e2-contador";
import E3SaludoProps from "./ejercicios/e3-saludo-props";
import E4BotonEvento from "./ejercicios/e4-boton-evento";
import E5Perfil from "./ejercicios/e5-perfil";
import E6ListaCompra from "./ejercicios/e6-lista-compra";
import E7Galeria from "./ejercicios/e7-Galeria/e7-Galeria";
import E8Inputs from "./ejercicios/e8-inputs";
import E9Puntuaciones from "./ejercicios/e9-puntaje";
import E10Cuestionario from "./ejercicios/e10-cuestionario";
import E11Notas from "./ejercicios/e11-notas/e11-notas";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="e1" element={<E1HolaMundo />} />
          <Route path="e2" element={<E2Contador />} />
          <Route path="e3" element={<E3SaludoProps />} />
          <Route path="e4" element={<E4BotonEvento />} />
          <Route path="e5" element={<E5Perfil />} />
          <Route path="e6" element={<E6ListaCompra />} />
          <Route path="e7" element={<E7Galeria />} />
          <Route path="e8" element={<E8Inputs />} />
          <Route path="e9" element={<E9Puntuaciones />} />
          <Route path="e10" element={<E10Cuestionario />} />
          <Route path="e11" element={<E11Notas />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
