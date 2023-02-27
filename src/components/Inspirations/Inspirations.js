import { Component } from "react";
import { SwiperImage } from "./InspirationsStyles";
import { SectionTitle, SectionTitleArea } from "../GlobalStyles";

import { Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/inspirations/1.png";
import img2 from "../../assets/images/inspirations/2.png";
import img3 from "../../assets/images/inspirations/3.png";
import img4 from "../../assets/images/inspirations/4.png";
import img5 from "../../assets/images/inspirations/5.png";
import img6 from "../../assets/images/inspirations/6.png";
import img7 from "../../assets/images/inspirations/7.png";
import img8 from "../../assets/images/inspirations/8.png";

export default class Inspirations extends Component {
  render() {
    return (
      <>
        <div className="container">
          <SectionTitleArea>
            <SectionTitle>Our Inspirations</SectionTitle>
          </SectionTitleArea>
        </div>
        <div className="container">
          <Swiper
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
            <div className="container">
              <SwiperSlide>
                <SwiperImage src={img1}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img2}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img3}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img4}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img5}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img6}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img7}></SwiperImage>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImage src={img8}></SwiperImage>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </>
    );
  }
}
