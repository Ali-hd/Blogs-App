import Carousel from "../Carousel";
import CardsSlider from "../CardsSlider";
import { home } from "../utils/data";

const HomePage = () => {
  return (
    <div className="home-wrap">
      <Carousel />
      <div className="home-content">
        <div className="most-read-container">
          <div className="most-read-header">
            <h2>{home.mostRead.header}</h2>
            <div className="most-read-more">
              <span>{home.mostRead.headerBtn}</span>
              <img src="./icons/left_arrow.svg" alt="left arrow" />
            </div>
          </div>
          <div className="most-read-media">
            {home.mostRead.media.map((ele, i) => {
              return (
                <div key={i} className="most-read-image">
                  <img src={ele.image} alt="most read" />
                  <div className="most-read-content">
                    <h3>{ele.header}</h3>
                    <p>{ele.content}</p>
                    <span>{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content-layout">
          <div className="layout-right-container">
            <img src={home.firstLayout.rightSide.image} alt="wide" />
            <div className="layout-data">
              <div className="layout-data-head">
                <div></div>
                <span>{home.firstLayout.rightSide.type}</span>
              </div>
              <h3>{home.firstLayout.rightSide.title}</h3>
              <p>{home.firstLayout.rightSide.content}</p>
              <span>{home.firstLayout.rightSide.author}</span>
            </div>
          </div>
          <div className="layout-left-container">
            {home.firstLayout.leftSide.map((ele, i) => {
              return (
                <div key={i} className="layout-data-item">
                  <img src={ele.image} alt="im" />
                  <div className="layout-data no-padding">
                    <div className="layout-data-head">
                      <div></div>
                      <span>{ele.type}</span>
                    </div>
                    <h3>{ele.title}</h3>
                    <p>{ele.content}</p>
                    <span>{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="content-heighlight">
          <img src={home.heighlight.image} alt="highlight" />
          <div className="content-heighlight-info ">
            <div className="content-heighlight-head">
              <div></div>
              <span>{home.heighlight.type}</span>
            </div>
            <h1>{home.heighlight.title}</h1>
            <p>{home.heighlight.content}</p>
            <span>{home.heighlight.author}</span>
          </div>
        </div>
        <CardsSlider />
        <div className="content-layout2">
          <div className="layout2-right-container">
            {home.secondLayout.rightSide.map((ele, i) => {
              return (
                <div key={i} className="layout-data-item">
                  <div className="layout-data no-padding">
                    <div className="layout-data-head">
                      <div></div>
                      <span>{ele.type}</span>
                    </div>
                    <h3>{ele.title}</h3>
                    <p>{ele.content}</p>
                    <span>{ele.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="layout2-left-container">
            <img src={home.secondLayout.leftSide.image} alt="wide image" />
            <div className="layout-data">
              <div className="layout-data-head">
                <div></div>
                <span>{home.secondLayout.leftSide.type}</span>
              </div>
              <h3>{home.secondLayout.leftSide.title}</h3>
              <p>{home.secondLayout.leftSide.content}</p>
              <span>{home.secondLayout.leftSide.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
