import React, { useRef } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const categoryData = [
  {
    name: "Cupcake",
    items: 22,
    image: "cookies.svg",
  },
  {
    name: "Pizza",
    items: 25,
    image: "pizza.svg",
  },
  {
    name: "Kebab",
    items: 12,
    image: "kebab.svg",
  },
  {
    name: "Salmon",
    items: 22,
    image: "salmon.svg",
  },
  {
    name: "Doughnut",
    items: 11,
    image: "doughnut.svg",
  },
  {
    name: "Cupcake",
    items: 22,
    image: "cookies.svg",
  },
  {
    name: "Pizza",
    items: 25,
    image: "pizza.svg",
  },
  {
    name: "Kebab",
    items: 12,
    image: "kebab.svg",
  },
  {
    name: "Salmon",
    items: 22,
    image: "salmon.svg",
  },
  {
    name: "Doughnut",
    items: 11,
    image: "doughnut.svg",
  },
];

export default function Category() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <section className="category">
      <Container className="px-5">
        <h3 className="category__title my-5">
          Browser Our Category
          <span className="category__title-green">Receipt</span>
        </h3>
      </Container>
      <Swiper
        modules={[Scrollbar]}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        initialSlide={2}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categoryData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card className="category__card my-3">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src={require(`../img/icons/${data.image}`)}
                  alt="Category Icon"
                  className="category__card-icon mb-4"
                />
                <h6 className="category__card-name">{data.name}</h6>
                <p className="category__card-items">{data.items} Items</p>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className="d-lg-flex flex-row-reverse d-none">
        <Button
          className="category__control mx-2 d-flex align-items-center flex-row-reverse"
          onClick={handleNext}
        >
          <div className="category__icon-container ms-2">
            <FaAngleRight className="category__icon-img" size={30} />
          </div>
          Next
        </Button>
        <Button
          className="category__control mx-2 d-flex align-items-center flex-row"
          onClick={handlePrev}
        >
          <div className="category__icon-container me-2">
            <FaAngleLeft className="category__icon-img" size={30} />
          </div>
          Prev
        </Button>
      </Container>
    </section>
  );
}
