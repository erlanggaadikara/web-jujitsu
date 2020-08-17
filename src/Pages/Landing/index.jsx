import React, { useLayoutEffect, useEffect } from "react";
import { observer, useObservable } from "mobx-react-lite";
import MenuBar from "./MenuBar";
import Beranda from "./Beranda";
import TentangKami from "./TentangKami";
import Kepengurusan from "./Kepengurusan";
import Kontak from "./Kontak";
import "./style.css";
import VisitorTracker from "../../Utils/VisitorTracker";
import { findAllByTestId } from "@testing-library/react";

export default observer(() => {
  const [visible, setVisible] = React.useState(false);
  const menuHandle = () => {
    let scrollY = window.scrollY;
    let menuEl = document.getElementById("menu-bar");
    if (scrollY > 0) {
      // eslint-disable-next-line no-unused-expressions
      menuEl?.classList.add("scroll");
    } else {
      // eslint-disable-next-line no-unused-expressions
      menuEl?.classList.remove("scroll");
    }
  };

  const handleScroll = () => {
    menuHandle();
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //Tracking Visitor (proses)
  //VisitorTracker("/");

  return (
    <>
      {/* {visible ? <MenuBar /> : null} */}
      <MenuBar />
      <div id="beranda" className="page">
        <Beranda />
        <TentangKami />
        <Kepengurusan />
        <Kontak />
      </div>
    </>
  );
});
