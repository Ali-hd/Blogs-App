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
    <div className="nav-sticky">
      <div className="navbar-wrap">
        <nav className="navbar-container">
          <div onClick={() => toogleDropDown()} className="navbar-dropdown-btn">
            <img
              src={
                darkmode ? "./icons/navbars_white.svg" : "./icons/navbars.svg"
              }
              alt="navbar"
            />
          </div>
          <div className="navbar-logo">
            <span>مدونة</span>
            <div></div>
            <span>Blog</span>
          </div>
          <div className="navbar-items-container">
            <div
              className={
                useRouter.asPath === "/"
                  ? "nav-item-active nav-item"
                  : "nav-item"
              }
            >
              <Link href="/">الرئيسية</Link>
            </div>
            <div
              className={
                useRouter.asPath === "/blogs"
                  ? "nav-item-active nav-item"
                  : "nav-item"
              }
            >
              <Link prefetch={false} href="/blogs">التقارير والدراسات</Link>
            </div>
            <div
              className={
                useRouter.asPath === "/studies"
                  ? "nav-item-active nav-item"
                  : "nav-item"
              }
            >
              <Link href="/studies">المقالات</Link>
            </div>
          </div>
          <div className="navbar-functions">
            <div className="navbar-function-item">
              <img
                src={
                  darkmode ? "./icons/search_light.svg" : "./icons/search.svg"
                }
                alt="search icon"
              />
            </div>
            <div
              onClick={() => handleDarkMode(false, updateDarkMode, false)}
              className="navbar-function-item"
            >
              <img
                src={darkmode ? "./icons/moon_light.svg" : "./icons/crest.svg"}
                alt="theme icon"
              />
            </div>
          </div>
        </nav>
      </div>
      <div
        style={navIsOpen ? { top: "78px" } : { top: "15px" }}
        className="dropdown-menu"
      >
        <div className="dropdown-nav-items">
          <div
            className={
              useRouter.asPath === "/" ? "nav-item-active nav-item" : "nav-item"
            }
          >
            <Link href="/">الرئيسية</Link>
          </div>
          <div
            className={
              useRouter.asPath === "/blogs"
                ? "nav-item-active nav-item"
                : "nav-item"
            }
          >
            <Link href="/blogs">التقارير والدراسات</Link>
          </div>
          <div
            className={
              useRouter.asPath === "/studies"
                ? "nav-item-active nav-item"
                : "nav-item"
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
