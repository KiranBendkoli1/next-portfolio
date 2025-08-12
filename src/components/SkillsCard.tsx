import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  Typescript,
  Tailwindcss,
  ReactDark,
  Nodejs,
  ExpressjsDark,
  PostgresqlDark,
  Flutter,
  Git,
  GithubLight,
  Mongodb,
  PythonDark,
  JavaDark,
  PhpDark,
} from "./icons";

const SkillsCard = () => {
  return (
    <>
      <h2 className="text-2xl font-medium mb-6">My Skills</h2>
      <Swiper
        className="overl mb-2.5"
        spaceBetween={50}
        modules={[Autoplay]}
        slidesPerView={8}
        loop
        autoplay={{
          delay: 0, // Time between slides (ms)
          disableOnInteraction: false, // Keep autoplay even after user swipes
        }}
        speed={1000} // Slide animation speed
      >
        <SwiperSlide>
          <Typescript />
        </SwiperSlide>
        <SwiperSlide>
          <Tailwindcss />
        </SwiperSlide>
        <SwiperSlide>
          <ReactDark />
        </SwiperSlide>
        <SwiperSlide>
          <Nodejs />
        </SwiperSlide>
        <SwiperSlide>
          <ExpressjsDark />
        </SwiperSlide>
        <SwiperSlide>
          <PostgresqlDark />
        </SwiperSlide>
        <SwiperSlide>
          <Flutter />
        </SwiperSlide>
        <SwiperSlide>
          <Git />
        </SwiperSlide>
        <SwiperSlide>
          <GithubLight />
        </SwiperSlide>
        <SwiperSlide>
          <Mongodb />
        </SwiperSlide>
        <SwiperSlide>
          <PythonDark />
        </SwiperSlide>
        <SwiperSlide>
          <JavaDark />
        </SwiperSlide>
        <SwiperSlide>
          <PhpDark />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SkillsCard;
