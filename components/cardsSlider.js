import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CardsSlider = (props) => {
  const [selectedTab, setSelectedTab] = useState("1");
  const {cards} = props

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const TabsHeader = () => {
    return (
      <div className="content-tabs-header">
        <div className="content-tabs">
          <div
            onClick={() => handleTabSelect("1")}
            className={
              selectedTab == "1"
                ? "content-tab-title active-tab"
                : "content-tab-title"
            }
          >
            <a>الاكثر مشاهدة</a>
          </div>
          <div
            onClick={() => handleTabSelect("2")}
            className={
              selectedTab == "2"
                ? "content-tab-title active-tab"
                : "content-tab-title"
            }
          >
            <a>الاكثر شهرة</a>
          </div>
          <div
            onClick={() => handleTabSelect("3")}
            className={
              selectedTab == "3"
                ? "content-tab-title active-tab"
                : "content-tab-title"
            }
          >
            <a>الاكثر قراءة</a>
          </div>
        </div>
        <div className="content-tabs-controls">
          <div className="card-nextel">
            <img src="./icons/right_arrow2.svg" alt="right" />
          </div>
          <div className="card-prevel">
            <img src="./icons/left_arrow2.svg" alt="left" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="content-tabs-container">
      <TabsHeader />
      <Swiper
        // dir="rtl"
        modules={[Navigation]}
        initialSlide={4} //last slide on page
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={false}
        fadeEffect={true}
        grabCursor={true}
        className="cards-swiper"
        navigation={{
          nextEl: ".card-nextel",
          prevEl: ".card-prevel",
        }}
        breakpoints={{
          // when window is >= 910
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          910: { slidesPerView: 3 },
        }}
      >
        {cards.map(ele=>{
          return(
            <SwiperSlide key={ele.id} className="cards-slider">
            <div className="content-tab-item">
              <img src={ele.image} alt="image" />
              <div className="layout-data ">
                <div className="layout-data-head">
                  <div></div>
                  <span>{ele.type}</span>
                </div>
                <h3 className="header2">{ele.title}</h3>
                <p>{ele.content}</p>
                <span>بواسطة {ele.author}</span>
              </div>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default CardsSlider;
