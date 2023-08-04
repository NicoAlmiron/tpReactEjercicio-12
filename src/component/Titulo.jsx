import React from "react";
import logo from "../assets/DailyPlanetLogo.png";

const Titulo = () => {
  return (
    <section className="text-center pt-5 mb-5">
      <img src={logo} alt="Logo-DailyPlanet" className="w-100" />
      <h4 className="display-6">Verdad, Noticias y Confianza</h4>
    </section>
  );
};

export default Titulo;
