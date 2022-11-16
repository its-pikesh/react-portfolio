import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/Adarsh.jpg";
import AVTR2 from "../../assets/Arun.jpg";

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
      review:"I just wanted to share a quick note, I had a great experince working with Pikesh. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all. ",
      mention:"https://adarshpawar.com"
      },
    {
      avatar: AVTR2,
      name: "Arun Chaudhary",
      review:
        "Had a great experience wotking with pikesh in many hackathons and college projects, together we worked in capstone project which was really fun, we learnt alot while working together.",
    },
  ];

  return (
    <section id="testimonial">
      <h5>Review From colleagues</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonial__container"
        navigation
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review,mention }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} className="client__avt" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              <small><a href="mention">Check My Profile</a></small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
