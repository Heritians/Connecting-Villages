"use client";

import Image from "next/image";

import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import InspirationImages from "@/assets/images/inspirations";

const InspirationsSection = () => {
  return (
    <>
      <div>
        <h1 className="section_title">Our Inspirations</h1>
        <div className="w-full flex items-center justify-center">
          <Swiper
            className="w-11/12 sm:w-4/5"
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {InspirationImages.map((image, index) => (
              <SwiperSlide key={index} className="mb-6">
                <Image
                  src={image}
                  alt={`inspiration-${index}`}
                  className="rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default InspirationsSection;
