import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="carousel-swiper w-full h-full max-w-[1599px] max-h-[513px] min-h-[265px]"
      >
        <SwiperSlide className="carousel-slide text-center text-[18px] bg-white">
          <div className="relative">
            <img
              className="w-full h-full block object-cover brightness-[50%] mwsm2:h-[265px]"
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="flex flex-col gap-[15px] max-w-[815px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mwsm3:max-w-[500px] mwsm3:w-full mwsm3:py-[10px] mwsm3:px-[30px] mwxsm:gap-[10px] mwxsm:py-[10px] mwxsm:px-4">
              <h1 className="text-[48px] leading-[71px] font-bold text-white mwmd:font-normal mwmd:text-[30px] mwmd:leading-9 mwmd3:font-medium mwmd3:text-[35px] mwmd3:leading-[42px] mwlg2:font-semibold mwlg2:text-[42px] mwlg2:leading-[50px] ">مركز المدونة</h1>
              <p className="font-normal text-[25px] leading-[37px] text-[#ECEEED] mwmd:text-sm mwmd:leading-[21px] mwmd3:text-[19px] mwmd3:leading-[25px] mwlg2:text-[23px] mwlg2:leading-[30px]">
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide text-center text-[18px] bg-white">
          <div className="relative">
            <img
              className="w-full h-full block object-cover brightness-[50%] mwsm2:h-[265px]"
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="flex flex-col gap-[15px] max-w-[815px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mwsm3:max-w-[500px] mwsm3:w-full mwsm3:py-[10px] mwsm3:px-[30px] mwxsm:gap-[10px] mwxsm:py-[10px] mwxsm:px-4">
              <h1 className="text-[48px] leading-[71px] font-bold text-white mwlg2:font-semibold mwlg2:text-[42px] mwlg2:leading-[50px] mwmd3:font-medium mwmd3:text-[35px] mwmd3:leading-[42px] mwmd:font-normal mwmd:text-[30px] mwmd:leading-9">مركز المدونة</h1>
              <p className="font-normal text-[25px] leading-[37px] text-[#ECEEED] mwlg2:text-[23px] mwlg2:leading-[30px] mwmd3:text-[19px] mwmd3:leading-[25px] mwmd:text-sm mwmd:leading-[21px]">
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide text-center text-[18px] bg-white">
          <div className="relative">
            <img
              className="w-full h-full block object-cover brightness-[50%] mwsm2:h-[265px]"
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="flex flex-col gap-[15px] max-w-[815px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mwsm3:max-w-[500px] mwsm3:w-full mwsm3:py-[10px] mwsm3:px-[30px] mwxsm:gap-[10px] mwxsm:py-[10px] mwxsm:px-4">
              <h1 className="text-[48px] leading-[71px] font-bold text-white mwlg2:font-semibold mwlg2:text-[42px] mwlg2:leading-[50px] mwmd3:font-medium mwmd3:text-[35px] mwmd3:leading-[42px] mwmd:font-normal mwmd:text-[30px] mwmd:leading-9">مركز المدونة</h1>
              <p className="font-normal text-[25px] leading-[37px] text-[#ECEEED] mwlg2:text-[23px] mwlg2:leading-[30px] mwmd3:text-[19px] mwmd3:leading-[25px] mwmd:text-sm mwmd:leading-[21px]">
                مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
                بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
                كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide text-center text-[18px] bg-white">
          <div className="relative">
            <img
              className="w-full h-full block object-cover brightness-[50%] mwsm2:h-[265px]"
              src="./images/diverse-people-working-office 1.png"
              alt="silder_image"
            />
            <div className="flex flex-col gap-[15px] max-w-[815px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mwsm3:max-w-[500px] mwsm3:w-full mwsm3:py-[10px] mwsm3:px-[30px] mwxsm:gap-[10px] mwxsm:py-[10px] mwxsm:px-4">
              <h1 className="text-[48px] leading-[71px] font-bold text-white mwlg2:font-semibold mwlg2:text-[42px] mwlg2:leading-[50px] mwmd3:font-medium mwmd3:text-[35px] mwmd3:leading-[42px] mwmd:font-normal mwmd:text-[30px] mwmd:leading-9">مركز المدونة</h1>
              <p className="font-normal text-[25px] leading-[37px] text-[#ECEEED] mwlg2:text-[23px] mwlg2:leading-[30px] mwmd3:text-[19px] mwmd3:leading-[25px] mwmd:text-sm mwmd:leading-[21px]">
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