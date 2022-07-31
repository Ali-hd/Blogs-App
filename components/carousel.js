import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="carousel-swiper"
      >
        <SwiperSlide className="carousel-slide">
          <div className="slide-wrap">
            <img
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="slide-info">
              <h1>مركز المدونة</h1>
              <p>
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <div className="slide-wrap">
            <img
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="slide-info">
              <h1>مركز المدونة</h1>
              <p>
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <div className="slide-wrap">
            <img
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="slide-info">
              <h1>مركز المدونة</h1>
              <p>
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <div className="slide-wrap">
            <img
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="slide-info">
              <h1>مركز المدونة</h1>
              <p>
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
