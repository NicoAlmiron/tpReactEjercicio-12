import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./component/Titulo";
import FormularioNoticia from "./component/FormularioNoticia";
import React from "react";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <FormularioNoticia></FormularioNoticia>
      </Container>
    </>
  );
}

export default App;
