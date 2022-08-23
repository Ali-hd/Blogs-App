import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import handleDarkMode from "../helpers/darkmode";
import actionTypes from "../redux/actions/actionTypes";
import { useRouter } from 'next/router'

function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter()
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { darkmode } = useSelector((state) => state.commentReducer);

  const toogleDropDown = () => {
    setNavIsOpen(!navIsOpen);
  };

  const updateDarkMode = (dark) => {
    dispatch({ type: actionTypes.SET_STATE, payload: { darkmode: dark } });
  };

  useEffect(() => {
    handleDarkMode(localStorage.getItem("theme"), updateDarkMode, true);

    const handleRouteChange = (url, { shallow }) => {
     setNavIsOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
  }, []);

  return (
    <div className="nav-sticky sticky self-start top-0 z-10">
      <div className="navbar-wrap flex flex-col items-center py-4 px-5 bg-white z-[5] relative mwsm20:relative">
        <nav className="navbar-container flex flex-row-reverse items-center w-full max-w-[1170px] mwsm20:relative">
          <div onClick={() => toogleDropDown()} className="navbar-dropdown-btn flex justify-center items-center mt-2 ml-5 w-6 h-6 cursor-pointer sm20:hidden mwsm20:block">
            <img
              className="w-full h-full"
              src={
                darkmode ? "./icons/navbars_white.svg" : "./icons/navbars.svg"
              }
              alt="navbar"
            />
          </div>
          <div className="navbar-logo flex flex-row-reverse items-center gap-3 w-[164px] h-[45.74px] cursor-default">
            <span className="font-bold text-[25px] leading-[37px] text-[#212121] text-right">مدونة</span>
            <div className="h-[27px] w-0 border-[3px] rounded"></div>
            <span className="font-bold text-[25px] leading-[37px] text-[#212121] text-right">Blog</span>
          </div>
          <div className="navbar-items-container flex items-center flex-row-reverse gap-[50px] pr-[90px] mwsm20:hidden">
            <div
              className={
                useRouter.asPath === "/"
                  ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
                  : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
              }
            >
              <Link href="/">الرئيسية</Link>
            </div>
            <div
              className={
                useRouter.asPath === "/blogs"
                  ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
                  : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
              }
            >
              <Link prefetch={false} href="/blogs">التقارير والدراسات</Link>
            </div>
            <div
              className={
                useRouter.asPath === "/studies"
                  ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
                  : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
              }
            >
              <Link href="/studies">المقالات</Link>
            </div>
          </div>
          <div className="navbar-functions mr-auto flex items-center flex-row-reverse gap-[35px]">
            <div>
              <img
              className="cursor-pointer"
                src={
                  darkmode ? "./icons/search_light.svg" : "./icons/search.svg"
                }
                alt="search icon"
              />
            </div>
            <div
              onClick={() => handleDarkMode(false, updateDarkMode, false)}
            >
              <img
                className="cursor-pointer"
                src={darkmode ? "./icons/moon_light.svg" : "./icons/crest.svg"}
                alt="theme icon"
              />
            </div>
          </div>
        </nav>
      </div>
      <div
        style={navIsOpen ? { top: "78px" } : { top: "15px" }}
        className="dropdown-menu w-full h-[46px] pt-[10px] z-[1] top-[78px] absolute bg-white transition-all duration-300"
      >
        <div className="dropdown-nav-items flex items-center flex-row-reverse gap-[50px] pr-[50px] top-10 right-[-20px] z-[1]">
          <div
            className={
              useRouter.asPath === "/" ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100" : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
            }
          >
            <Link href="/">الرئيسية</Link>
          </div>
          <div
            className={
              useRouter.asPath === "/blogs"
                ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
                : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
            }
          >
            <Link href="/blogs">التقارير والدراسات</Link>
          </div>
          <div
            className={
              useRouter.asPath === "/studies"
                ? "nav-item-active text-brand transition duration-500 after:opacity-[1] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-100 nav-item font-normal text-[17px] leading-[25px] relative flex justify-center after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
                : "nav-item font-normal text-[17px] leading-[25px] text-[#404343] relative flex justify-center transition duration-500 after:opacity-0 after:content-[' '] after:border-2 after:border-solid after:border-brand after:rounded after:block after:w-[95%] after:bottom-[-12px] after:absolute after:transition after:duration-200 after:ease-in-out after:scale-x-0 hover:text-brand hover:after:opacity-100 hover:after:scale-x-100"
            }
          >
            <Link href="/studies">المقالات</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
