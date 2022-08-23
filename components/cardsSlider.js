import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CardsSlider = (props) => {
  const [selectedTab, setSelectedTab] = useState("1");
  const {cards} = props

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const tabTitleClass = "relative text-right font-normal text-[22px] leading-[30px] text-[#a0a4a4] flex flex-col items-center transition duration-500	ease after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-[#5dd5c4] after:rounded after:w-[90%] after:bottom-[-13px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:after:opacity-100 hover:after:opacity-100 hover:after:scale-x-100 mwxsm:text-[18px] mwxsm:leading-[27px]"

  const TabsHeader = () => {
    return (
      <div className="flex flex-row-reverse justify-between h-15">
        <div className="flex flex-row-reverse items-center gap-[30px]">
          <div
            onClick={() => handleTabSelect("1")}
            className={
              selectedTab == "1"
                ? `${tabTitleClass} text-[#202221] after:opacity-100 after:content-[' '] after:border-solid after:border-2 after:border-[#5dd5c4] after:rounded after:w-[90%] after:bottom-[-13px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-100`
                : `${tabTitleClass}`
            }
          >
            <a className="hover:text-[#202221]">الاكثر مشاهدة</a>
          </div>
          <div
            onClick={() => handleTabSelect("2")}
            className={
              selectedTab == "2"
                ? `${tabTitleClass} text-[#202221] after:opacity-100 after:content-[' '] after:border-solid after:border-2 after:border-[#5dd5c4] after:rounded after:w-[90%] after:bottom-[-13px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-100`
                : `${tabTitleClass}`
            }
          >
            <a className="hover:text-[#202221]">الاكثر شهرة</a>
          </div>
          <div
            onClick={() => handleTabSelect("3")}
            className={
              selectedTab == "3"
                ? `${tabTitleClass} text-[#202221] after:opacity-100 after:content-[' '] after:border-solid after:border-2 after:border-[#5dd5c4] after:rounded after:w-[90%] after:bottom-[-13px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-100`
                : `${tabTitleClass}`
            }
          >
            <a className="hover:text-[#202221]">الاكثر قراءة</a>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-6 items-center mwxsm:hidden">
          <div className="card-nextel flex items-center justify-center cursor-pointer w-6 h-6">
            <img src="./icons/right_arrow2.svg" alt="right" />
          </div>
          <div className="card-prevel flex items-center justify-center cursor-pointer w-6 h-6">
            <img src="./icons/left_arrow2.svg" alt="left" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 px-3.5">
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
        className="w-full h-full max-w-[1170px] max-h-[442px] flex flex-row-reverse !mr-0 mwsm:w-[330px] sm:w-[600px] md:w-[910px]"
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
            <SwiperSlide key={ele.id} className="cards-slider flex justify-end">
            <div className="flex flex-col w-[270px]">
              <img className="rounded-t-[3px] w-full h-[230px]" src={ele.image} alt="card-img"/>
              <div className="layout-data flex flex-col p-[18px] gap-3">
                <div className="layout-data-head flex flex-row-reverse gap-2">
                  <div className="w-[2px] h-[19px] bg-brand"></div>
                  <span className="font-normal text-sm leading-[21px] text-right text-[#404343]">{ele.type}</span>
                </div>
                <h3 className="font-normal text-lg leading-[26px] text-right text-[#212121]">{ele.title}</h3>
                <p className="font-normal text-base text-right text-[#808686]">{ele.content}</p>
                <span className="font-normal text-sm leading-[21px] text-right text-[#404343]">بواسطة {ele.author}</span>
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