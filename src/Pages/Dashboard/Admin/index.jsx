import React, { useState, createContext } from "react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useAsyncEffect } from "use-async-effect";
import Logo from "../../Landing/logo.png";
import { viewData } from "../../../Api/backend";

const initialData = {
  fakultas: [],
  jurusan: [],
  member: [],
};

export const DataContext = createContext(initialData);

export default ({ children, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [swipe, setSwipe] = useState({ left: false, right: false });
  const [data, setData] = useState(initialData);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSwipe = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSwipe({ ...swipe, [anchor]: open });
  };

  useAsyncEffect(async () => {
    let jurusan = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/jurusan"
    );
    if (!jurusan) console.log(jurusan);

    let fakultas = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/fakultas"
    );
    if (!fakultas) console.log(fakultas);

    let member = await viewData(
      "https://backend.jujitsu-upnvjatim.xyz/api/member"
    );
    if (!member) {
      member = null;
      console.log(member);
    }

    setData({ fakultas, jurusan, member });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <div className={classes.drawer}>
        <Hidden smUp>
          {["left", "right"].map((anchor) => (
            <SwipeableDrawer
              container={container}
              variant="temporary"
              anchor={anchor}
              open={swipe[anchor]}
              onClose={handleSwipe(anchor, false)}
              onOpen={handleSwipe(anchor, true)}
              style={{
                paddingLeft: 20,
                backgroundColor: "#e6e6e6",
                paddingBottom: "50%",
                width: 100,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <div style={{ width: 300 }}>
                <img
                  src={Logo}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                  alt="logoLanding"
                />
                <Divider />
                <div stye={{ margin: 50 }}>
                  <Sidebar
                    anchor={anchor}
                    handleSwipe={handleSwipe(anchor, false)}
                  />
                </div>
              </div>
            </SwipeableDrawer>
          ))}
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent" open>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                width: 250,
              }}
            >
              <img
                src={Logo}
                style={{
                  justifyContent: "center",
                  width: 150,
                  height: 150,
                }}
                alt="logoLanding"
              />
              <Divider />
              <Sidebar />
            </div>
          </Drawer>
        </Hidden>
      </div>
      <div className={classes.content} style={{ width: "100%" }}>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      </div>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));
