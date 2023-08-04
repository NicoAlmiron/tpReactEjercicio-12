import React from "react";
import { Button, Card } from "react-bootstrap";

const Noticia = ({ listaNoticias, i }) => {
  return (
    <Card style={{ width: "15rem" }} className="m-2">
      <Card.Img variant="top" src={listaNoticias[i].image_url} />
      <Card.Body>
        <p className="mb-3 fst-italic">{listaNoticias[i].creator}📰</p>
        <Card.Title>{listaNoticias[i].title}</Card.Title>
        <h6 className="text-secondary">{listaNoticias[i].country} 🌍</h6>
        <Card.Text row={4}>- {listaNoticias[i].description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="warning" href={listaNoticias[i].link} target="blank">
          Ver Noticia
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
