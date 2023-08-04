import React from "react";
import Noticia from "./Noticia";

const ListaNoticias = ({ listaNoticias }) => {
  return (
    <article className="d-flex justify-content-evenly align-items-evenly flex-wrap">
      {listaNoticias.map((noticias, index) => (
        <Noticia key={index} listaNoticias={listaNoticias} i={index}></Noticia>
      ))}
    </article>
  );
};

export default ListaNoticias;
