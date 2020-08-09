import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import {
  Button,
  AppBar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Logo from "./logo.png";
import { useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default observer(() => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    a: {
      textDecoration: "none",
    },
  };

  // const isDesktop = useMediaQuery("(min-width:1224px)");

  const isMobile = useMediaQuery("(max-width: 1224px)");

  return (
    <>
      <AppBar style={style.appBar}>
        <Button style={style.icon} href={"#beranda"}>
          <Typography style={style.icon.text} variant="h6">
            <img src={Logo} style={{ width: 51, height: 51 }} />
          </Typography>
        </Button>
        <div style={style.menu}>
          {isMobile ? (
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {console.log(anchorEl)}
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button href={"#beranda"}>Beranda</Button>
              <Button href={"#tentang-kami"}>Tentang Kami</Button>
              <Button href={"#kepengurusan"}>Kepengurusan</Button>
              <Button href={"#kontak"}>Kontak</Button>
            </>
          )}
        </div>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a style={style.a} href="#beranda">
            Beranda
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a style={style.a} href="#tentang-kami">
            Tentang Kami
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a style={style.a} href="#kepengurusan">
            Kepengurusan
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a style={style.a} href="#kontak">
            Kontak
          </a>
        </MenuItem>
      </Menu>
    </>
  );
});
