import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeaderImage from "../img/green-salad-tomato.png";
import StarRating from "./StarRating";

const headerImage = (
  <>
    <div className="header__image-container ms-lg-auto my-5 my-lg-0">
      <img
        src={HeaderImage}
        alt="Green Salad Tomato"
        className="header__image-content"
      />
      <div className="header__image-card d-flex align-items-center">
        <img
          src={HeaderImage}
          alt="Green Salad Tomato"
          className="header__card-image"
        />
        <div className="header__card-content">
          <h4 className="header__card-name">Green Salad Tomato</h4>
          <span className="header__card-category my-1">Tomato</span>
          <StarRating rating={4} />
        </div>
      </div>
    </div>
  </>
);

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6} className="px-5 px-lg-2">
            <h1 className="header__title">
              Good Food Us
              <br />
              Good Mood
            </h1>
            <div className="d-block d-lg-none">{headerImage}</div>
            <p className="header__desc my-4">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <Button className="header__button-primary">Daftar Sekarang</Button>
            <Button className="header__button-secondary ms-4">About Us</Button>
          </Col>
          <Col lg={6} className="d-lg-block d-none">
            {headerImage}
          </Col>
        </Row>
      </Container>
    </header>
  );
}
