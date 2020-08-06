import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Button, AppBar, Typography } from "@material-ui/core";

export default observer(() => {
  //   const meta = useObservable({
  //     isCallVisible: false,
  //   });

  return (
    <>
      <AppBar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Button style={{ padding: 10 }} href={"#beranda"}>
          <Typography style={{ color: "black" }} variant="h6">
            Icon Web Jujitsu
          </Typography>
        </Button>
        <div
          style={{
            display: "flex",
            padding: 10,
          }}
        >
          <Button href={"#beranda"}>Beranda</Button>
          <Button href={"#tentang-kami"}>Tentang Kami</Button>
          <Button href={"#kepengurusan"}>Kepengurusan</Button>
          <Button href={"#kontak"}>Kontak</Button>
        </div>
      </AppBar>
    </>
  );
});
