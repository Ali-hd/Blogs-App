import Carousel from "../components/carousel";
import CardsSlider from "../components/cardsSlider";
import { home } from "../utils/data";
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className="home-wrap flex flex-col items-center gap-[70px]">
      <Head>
        <title>مدونه | الرئيسية</title>
        <meta property="og:title" content="الرئيسية"/>
      </Head>
      <Carousel />
      <div className="home-content w-full max-w-[1170px] flex flex-col justify-center gap-[70px]">
        <div className="most-read-container flex flex-col gap-[18px] items-center">
        <div className="most-read-header flex flex-row-reverse items-center gap-[10px] w-full justify-between">
            <h2 className="font-normal text-2xl leading-[30px] text-right text-[#202221] mwlg2:pr-5">{home.mostRead.header}</h2>
            <div className="most-read-more flex flex-row-reverse items-center cursor-pointer mwlg2:pl-5">
              <span className="font-normal text-base">{home.mostRead.headerBtn}</span>
              <img className="w-[15px] h-[15px] text-brand pr-[5px]" src="./icons/left_arrow.svg" alt="left arrow" />
            </div>
          </div>
          <div className="most-read-media flex gap-[30px] flex-row-reverse justify-center flex-wrap">
            {home.mostRead.media.map((ele, i) => {
              return (
                <div key={i} className="most-read-image w-[370px] h-[250px] relative rounded-tr-[3px] rounded-tl-[3px]">
                  <img className="w-full h-[250px]" src={ele.image} alt="most read" />
                  <div className="most-read-content absolute bottom-5 text-white text-right px-[18px] flex flex-col gap-3">
                    <h3 className="m-0 font-normal text-lg leading-[26px] text-white">{ele.header}</h3>
                    <p className="font-normal text-base text-[#eceeed]">{ele.content}</p>
                    <span className="font-normal text-sm leading-[21px] text-[#fafafa]">{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content-layout flex flex-row-reverse items-start p-0 gap-[30px] mwlg2:flex-col mwlg2:items-center">
        <div className="layout-right-container w-full max-w-[594px] flex flex-col mwlg2:max-w-[750px] mwlg2:w-full">
            <img className="w-[594px] h-[353px] rounded-tr-[3px] rounded-tl-[3px] mwlg2:w-full mwlg2:h-[60%]" src={home.firstLayout.rightSide.image} alt="wide" />
            <div className="layout-data flex flex-col p-[18px] gap-3 mwxsm2:gap-[9px]">
              <div className="layout-data-head flex flex-row-reverse gap-2">
                <div className="w-[2px] h-[19px] bg-brand"></div>
                <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs">{home.firstLayout.rightSide.type}</span>
              </div>
              <h3 className="font-normal text-xl leading-[29px] text-right text-[#212121] mwxsm2:text-sm mwxsm2:leading-[21px]">{home.firstLayout.rightSide.title}</h3>
              <p className="font-normal text-base text-right text-[#808686] mwxsm2:text-sm mwxsm2:leading-[21px]">{home.firstLayout.rightSide.content}</p>
              <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs mwxsm2:leading-[18px]">{home.firstLayout.rightSide.author}</span>
            </div>
          </div>
          <div className="layout-left-container flex flex-col min-w-[524px] gap-5 mwlg2:max-w-[770px] mwmd2:p-[10px] mwxsm2:min-w-[unset]">
            {home.firstLayout.leftSide.map((ele, i) => {
              return (
                <div key={i} className="layout-data-item flex flex-row-reverse items-center gap-[18px]">
                  <img className="max-w-[193px] w-full h-[160px] rounded mwxsm2:h-[124px] mwxsm2:w-[127px] mwxsm2:rounded" src={ele.image} alt="im" />
                  <div className="layout-data !p-0 flex flex-col gap-3 mwxsm2:gap-[9px]">
                    <div className="layout-data-head flex flex-row-reverse gap-2">
                      <div className="w-[2px] h-[19px] bg-brand"></div>
                      <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs">{ele.type}</span>
                    </div>
                    <h3 className="font-normal text-xl leading-[29px] text-right text-[#212121] mwxsm2:text-sm mwxsm2:leading-[21px]">{ele.title}</h3>
                    <p className="font-normal text-base text-right text-[#808686] mwxsm2:text-sm mwxsm2:leading-[21px]">{ele.content}</p>
                    <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs mwxsm2:leading-[18px]">{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-divider border-2 border-solid border-[#eceeed]"></div>
        <div className="content-heighlight h-[358px] w-full rounded relative mwsm:h-[263px] mwsm:transition-all">
          <img className="w-full h-full object-cover" src={home.heighlight.image} alt="highlight" />
          <div className="content-heighlight-info absolute top-[82px] right-[125px] flex flex-col items-end gap-3 text-right max-w-[520px] mwsm20:right-[60px] mwsm:right-10 mwsm:top-[60px] mwsm:gap-2">
            <div className="content-heighlight-head flex flex-row-reverse items-center gap-2">
              <div className="w-[2px] h-[19px] bg-brand"></div>
              <span className="text-base text-[#fafafa] mwsm:text-sm mswm:leading-[21px]">{home.heighlight.type}</span>
            </div>
            <h1 className="font-normal text-[40px] leading-[59px] text-white mwsm:text-xl mwsm:leading-[29px]">{home.heighlight.title}</h1>
            <p className="font-normal text-xl leading-[29px] text-[#fafafa] mwsm:text-sm mwsm:leading-[21px] mwsm:max-w-[500px] mwsm:text-right mwsm:pl-[30px]">{home.heighlight.content}</p>
            <span className="font-normal text-sm leading-[21px] text-[#fafafa]">{home.heighlight.author}</span>
          </div>
        </div>
        <CardsSlider cards={home.cards} />
        <div className="content-layout2 flex flex-row-reverse gap-[30px] px-4 mwlg2:py-0 mwlg2:px-4 mwmd2:flex-col mwmd2:m-auto mwmd2:max-w-[750px]">
          <div className="layout2-right-container flex flex-col gap-5 max-w-[270px] mwmd2:max-w-[unset]">
            {home.secondLayout.rightSide.map((ele, i) => {
              return (
                <div key={i} className="layout-data-item flex flex-row-reverse items-center gap-[18px]">
                  <div className="layout-data !p-0 flex flex-col gap-3 mwxsm2:gap-[9px]">
                    <div className="layout-data-head flex flex-row-reverse gap-2">
                      <div className="w-[2px] h-[19px] bg-brand"></div>
                      <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs">{ele.type}</span>
                    </div>
                    <h3 className="font-normal text-xl leading-[29px] text-right text-[#212121] mwxsm2:text-sm mwxsm2:leading-[21px]">{ele.title}</h3>
                    <p className="font-normal text-base text-right text-[#808686] mwxsm2:text-sm mwxsm2:leading-[21px]">{ele.content}</p>
                    <span className="font-normal text-sm leading-[21px] text-right text-[#404343] mwxsm2:text-xs mwxsm2:leading-[18px]">{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="layout2-left-container relative mwmd2:h-[539px]">
            <img className="w-full max-w-[870px] h-full max-h-[545px] mwmd2:object-cover" src={home.secondLayout.leftSide.image} alt="wide image" />
            <div className="layout-data flex flex-col p-[18px] gap-3 absolute bottom-6 right-[18px] mwxsm2:gap-[9px]">
              <div className="layout-data-head flex flex-row-reverse gap-2">
                <div className="w-[2px] h-[19px] bg-brand"></div>
                <span className="font-normal text-sm leading-[21px] text-right text-[#fafafa] mwxsm2:text-xs">{home.secondLayout.leftSide.type}</span>
              </div>
              <h3 className="font-normal text-xl leading-[29px] text-right text-white mwxsm2:text-sm mwxsm2:leading-[21px]">{home.secondLayout.leftSide.title}</h3>
              <p className="font-normal text-base text-right text-[#eceeed] mwxsm2:text-sm mwxsm2:leading-[21px]">{home.secondLayout.leftSide.content}</p>
              <span className="font-normal text-sm leading-[21px] text-right text-[#fafafa] mwxsm2:text-xs mwxsm2:leading-[18px]">{home.secondLayout.leftSide.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
