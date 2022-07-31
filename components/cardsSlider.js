import React, { useState } from "react";
import {Navigation} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const CardsSlider = () => {
  const [selectedTab, setSelectedTab] = useState("1");

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
        modules={[Navigation]}
        initialSlide={4} //last slide on page
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={false}
        fadeEffect={true}
        grabCursor={true}
        className="cards-swiper"
        navigation={{
          nextEl: '.card-nextel',
          prevEl: '.card-prevel'
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
                  // when window is >= 910
          910: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="cards-slider">
          <div className="content-tab-item">
            <img src="./images/dwqwqd.png" alt="image" />
            <div className="layout-data ">
              <div className="layout-data-head">
                <div></div>
                <span>أفكار البزنس</span>
              </div>
              <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
              <p>
                من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
                تريليون في عام 1202
              </p>
              <span>بواسطة عبدالله عادل</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cards-slider">
          <div className="content-tab-item">
            <img src="./images/dwqwqd.png" alt="image" />
            <div className="layout-data ">
              <div className="layout-data-head">
                <div></div>
                <span>أفكار البزنس</span>
              </div>
              <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
              <p>
                من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
                تريليون في عام 1202
              </p>
              <span>بواسطة عبدالله عادل</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cards-slider">
          <div className="content-tab-item">
            <img src="./images/dwqwqd.png" alt="image" />
            <div className="layout-data ">
              <div className="layout-data-head">
                <div></div>
                <span>أفكار البزنس</span>
              </div>
              <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
              <p>
                من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
                تريليون في عام 1202
              </p>
              <span>بواسطة عبدالله عادل</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cards-slider">
          <div className="content-tab-item">
            <img src="./images/dwqwqd.png" alt="image" />
            <div className="layout-data ">
              <div className="layout-data-head">
                <div></div>
                <span>أفكار البزنس</span>
              </div>
              <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
              <p>
                من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
                تريليون في عام 1202
              </p>
              <span>بواسطة عبدالله عادل</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="content-tab-items">
        <div className="content-tab-item">
          <img src="./images/dwqwqd.png" alt="image" />
          <div className="layout-data ">
            <div className="layout-data-head">
              <div></div>
              <span>أفكار البزنس</span>
            </div>
            <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
            <p>
              من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
              تريليون في عام 1202
            </p>
            <span>بواسطة عبدالله عادل</span>
          </div>
        </div>
        <div className="content-tab-item">
          <img src="./images/Rectangle 326 (4).png" alt="image" />
          <div className="layout-data ">
            <div className="layout-data-head">
              <div></div>
              <span>أفكار البزنس</span>
            </div>
            <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
            <p>
              من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
              تريليون في عام 1202
            </p>
            <span>بواسطة عبدالله عادل</span>
          </div>
        </div>
        <div className="content-tab-item">
          <img src="./images/Rectangle 326 (5).png" alt="image" />
          <div className="layout-data ">
            <div className="layout-data-head">
              <div></div>
              <span>أفكار البزنس</span>
            </div>
            <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
            <p>
              من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
              تريليون في عام 1202
            </p>
            <span>بواسطة عبدالله عادل</span>
          </div>
        </div>
        <div className="content-tab-item">
          <img src="./images/Rectangle 326 (3).png" alt="image" />
          <div className="layout-data ">
            <div className="layout-data-head">
              <div></div>
              <span>أفكار البزنس</span>
            </div>
            <h3 className="header2">ما هو مستقبل التجارة الإلكترونية</h3>
            <p>
              من المتوقع أن تزيد المبيعات من 3.1 تريليون في عام4102 إلى 5.4
              تريليون في عام 1202
            </p>
            <span>بواسطة عبدالله عادل</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardsSlider;

