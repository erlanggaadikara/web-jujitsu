import React from "react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@material-ui/core";
import Logo from "../../Landing/logo.png";

export default ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", flex: 1, height: "100%" }}
    >
      <div
        style={{
          paddingLeft: 20,
          backgroundColor: "#e6e6e6",
          paddingBottom: "50%",
          width: "20%",
        }}
      >
        <div>
          <img
            src={Logo}
            style={{
              width: 150,
              height: 150,
            }}
            alt="logoLanding"
          />
        </div>

        <Sidebar />
      </div>

      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};
