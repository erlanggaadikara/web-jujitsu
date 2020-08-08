import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Button, AppBar, Typography } from "@material-ui/core";

export default observer(() => {
  const meta = useObservable({
    isCallVisible: false,
  });

  const style = {
    appBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
    },
    icon: {
      padding: 10,
      text: {
        color: "black",
      },
    },
    menu: {
      display: "flex",
      padding: 10,
    },
  };

  return (
    <>
      <AppBar style={style.appBar}>
        <Button style={style.icon} href={"#beranda"}>
          <Typography style={style.icon.text} variant="h6">
            Icon Web Jujitsu
          </Typography>
        </Button>
        <div style={style.menu}>
          <Button href={"#beranda"}>Beranda</Button>
          <Button href={"#tentang-kami"}>Tentang Kami</Button>
          <Button href={"#kepengurusan"}>Kepengurusan</Button>
          <Button href={"#kontak"}>Kontak</Button>
        </div>
      </AppBar>
    </>
  );
});
