import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import StarRating from "./StarRating";

const trendingData = [
  {
    name: "Pizza Pepperoni",
    category: "Pizza",
    rating: 4,
    image: "pizza-pepperoni.png",
  },
  {
    name: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    image: "pizza-meat.png",
  },
  {
    name: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    image: "doner-kebab.png",
  },
  {
    name: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    image: "salmon-roll.png",
  },
  {
    name: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    image: "cupcake-choco.png",
  },
  {
    name: "Doughnut Milk",
    category: "Doughnut",
    rating: 5,
    image: "doughnut-milk.png",
  },
  {
    name: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    image: "doughnut-unicorn.png",
  },
  {
    name: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    image: "kathi-kebab.png",
  },
];

export default function Trending() {
  return (
    <section className="trending">
      <Container className="px-5">
        <h3 className="trending__title my-5">
          Browser Our Trending
          <span className="trending__title-green">Receipt</span>
        </h3>
        <Row className="justify-content-center">
          {trendingData.map((data, index) => (
            <Col key={index} xxl={3} lg={4} md={6} className="trending__col">
              <Card className="trending__card my-3">
                <Card.Body>
                  <img
                    src={require(`../img/foods/${data.image}`)}
                    alt={data.name}
                    className="trending__card-image mb-3"
                  />
                  <h4 className="trending__card-name">{data.name}</h4>
                  <p className="trending__card-category mb-3">
                    {data.category}
                  </p>
                  <StarRating rating={data.rating} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center my-4">
          <Button className="trending__button">All Receipt</Button>
        </div>
      </Container>
    </section>
  );
}
