import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function OtherBrandsCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="other-brand-card-img "
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default OtherBrandsCards;