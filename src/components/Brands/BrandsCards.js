import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function BrandsCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="brand-card-img"
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          {props.title}
        </Card.Title>

        <Button
          variant="primary"
          onClick={props.link}
          className="download-button"
        >
          <BiLinkExternal /> &nbsp;
          {"View Catalogue"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BrandsCards;