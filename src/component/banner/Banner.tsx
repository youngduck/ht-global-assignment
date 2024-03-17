import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./banner.scss";
import { bannerDatas } from "@/mock/bannerData";

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {bannerDatas.map((item, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <a href={item.href} target="_blank">
              <img src={item.src} className="banner-image" />
              <div className="banner-contents-wrapper">
                <div className="banner-contents-text">
                  <span className="banner-contents-title">{item.title}</span>
                  <br />
                  <span className="banner-contents-duration">
                    {item.duration.startDate}~{item.duration.endDate}
                  </span>
                </div>
                <span className="banner-contents-button">투표하기</span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>ㅋㅋ</div>
    </>
  );
};

export default Banner;
