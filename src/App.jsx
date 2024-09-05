import { useState } from "react";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePages from "./view/HomePages";
import StgoPage from "./view/StgoPage";
import './App.css'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/Santiago" element={<StgoPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
