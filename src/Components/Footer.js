import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsEnvelope, BsInstagram, BsTelephone } from "react-icons/bs";
import LogoElemes from "../img/logo.png";

export default function Footer() {
  return (
    <Container>
      <footer className="footer">
        <Row>
          <Col className="mb-3" lg={4}>
            <img
              src={LogoElemes}
              alt="Elemes.id Logo"
              className="footer__logo"
            />
            <p className="footer__address my-4">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />
              Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
              Daerah Khusus Ibukota Jakarta 12950
            </p>
            <div className="d-flex">
              <div className="footer__icon-container me-3">
                <BsEnvelope size={20} className="footer__icon-img" />
              </div>
              <div className="footer__icon-container me-3">
                <BsTelephone size={20} className="footer__icon-img" />
              </div>
              <div className="footer__icon-container me-3">
                <BsInstagram size={20} className="footer__icon-img" />
              </div>
            </div>
          </Col>
          <Col className="mb-3" lg md={6}>
            <h5 className="footer__heading">Categories</h5>
            <ul className="footer__menu">
              <li className="footer__menu-list">Cupcake</li>
              <li className="footer__menu-list">Pizza</li>
              <li className="footer__menu-list">Kebab</li>
              <li className="footer__menu-list">Salmon</li>
              <li className="footer__menu-list">Doughnut</li>
            </ul>
          </Col>
          <Col className="mb-3" lg md={6}>
            <h5 className="footer__heading">About Us</h5>
            <ul className="footer__menu">
              <li className="footer__menu-list">About Us</li>
              <li className="footer__menu-list">FAQ</li>
              <li className="footer__menu-list">Report Problem</li>
            </ul>
          </Col>
          <Col className="mb-3" lg md={6}>
            <h5 className="footer__heading">Newsletter</h5>
            <p className="footer__text my-3">
              Get now free 50% discount for alll products on your first order
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Your email address"
                className="footer__form-input"
              />
              <Button className="footer__form-button">Send</Button>
            </InputGroup>
            <div className="d-flex align-items-center my-3">
              <BsEnvelope size={20} color="#8BAC3E" className="me-2" />
              <span>elemesid@gmail.com</span>
            </div>
            <div className="d-flex align-items-center my-3">
              <BsTelephone size={20} color="#8BAC3E" className="me-2" />
              <span>0888 1111 2222</span>
            </div>
          </Col>
        </Row>
      </footer>
      <p className="copyright my-4 text-center">
        © 2021 Elemes id. All rights reserved
      </p>
    </Container>
  );
}
