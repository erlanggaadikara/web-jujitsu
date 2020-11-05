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
import "./w3.css";
import {
  useMediaQuery,
  Modal,
  TextField,
  makeStyles,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate, Link } from "@reach/router";

export default observer(() => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modal, setModal] = React.useState(false);

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

    modal: {
      display: "flex",
      alignItems: "center",
      top: "30%",
      left: "37%",
      height: 400,
      width: 400,
    },
    paper: {
      justifyContent: "center",
      flexDirection: "row",
      padding: 100,
    },
  };

  // const isDesktop = useMediaQuery("(min-width:1224px)");

  const isMobile = useMediaQuery("(max-width: 1224px)");

  return (
    <>
      <AppBar style={style.appBar}>
        <Button style={style.icon} href={"#beranda"}>
          <Typography style={style.icon.text} variant="h6">
            <img
              src={Logo}
              style={{ width: 51, height: 51 }}
              alt="logoLanding"
            />
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
              {/* <Button>
                <Link to="/Sejarah">Sejarah</Link>{" "}
              </Button> */}
              <Button href={"#kontak"}>Kontak</Button>
              <Button onClick={() => setModal(true)}>Login</Button>
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
        <MenuItem onClick={() => setModal(true)}>
          <a style={style.a}>Login</a>
        </MenuItem>
      </Menu>
      <Modal open={modal} style={style.modal} onClose={() => setModal(false)}>
        <Paper style={style.paper} variant="outlined">
          <h2 id="simple-modal-title">Login</h2>
          <form noValidate autoComplete="off">
            <TextField id="username" label="Username" variant="outlined" />
            <TextField
              id="password"
              style={{ marginTop: 10 }}
              label="Password"
              variant="outlined"
            />
          </form>
          <Button style={{ marginTop: 10 }} variant="contained" color="primary">
            Confirm
          </Button>
        </Paper>
      </Modal>
    </>
  );
});
