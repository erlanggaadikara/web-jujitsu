import React, { useState, createContext } from "react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@material-ui/core";
import { useAsyncEffect } from "use-async-effect";
import Logo from "../../Landing/logo.png";
import { viewData } from "../../../Api/backend";

const initialData = {
  fakultas: [],
  jurusan: [],
};

export const DataContext = createContext(initialData);

export default ({ children }) => {
  const [data, setData] = useState(initialData);

  useAsyncEffect(async () => {
    let jurusan = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/jurusan"
    );

    if (!jurusan) {
      console.log(jurusan);
    }

    let fakultas = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );

    if (!fakultas) {
      console.log(fakultas);
    }
    setData({ fakultas, jurusan });
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", flex: 1, height: "100%" }}
    >
      <div
        style={{
          paddingLeft: 20,
          backgroundColor: "#e6e6e6",
          paddingBottom: "50%",
          minWidth: "20%",
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

      <div style={{ width: "100%" }}>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      </div>
    </div>
  );
};
