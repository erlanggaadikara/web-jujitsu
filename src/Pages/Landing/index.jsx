import React, { useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";
import MenuBar from "./MenuBar";

export default observer(() => {
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
    // handleActiveSection();
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <MenuBar />
    </>
  );
});
