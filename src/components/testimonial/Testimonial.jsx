import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/portfolio1.jpg";
import AVTR2 from "../../assets/portfolio1.jpg";

//impoer swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Adarsh Pawar",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio hic maxime ipsa eius nesciunt quisquam quas, ad aliquam neque.",
    },
    {
      avatar: AVTR2,
      name: "Arun Chaudhary",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio hic maxime ipsa eius nesciunt quisquam quas, ad aliquam neque.",
    },
  ];

  return (
    <section id="testimonial">
      <h5>Review From Customer</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonial__container"
        navigation
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
