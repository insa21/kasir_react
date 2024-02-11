/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { numberWithCommas } from "../utils/utils";
import { Col, Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            // eslint-disable-next-line react/prop-types
            menu.category.nama.toLowerCase() +
            "/" +
            // eslint-disable-next-line react/prop-types
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>
            {menu.nama} <strong>{menu.kode}</strong>
          </Card.Title>
          <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
